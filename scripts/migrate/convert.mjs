import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const ADMONITIONS = {
  'm-tip': 'tip',
  'm-note': 'note',
  'm-info': 'info',
  'm-warning': 'warning',
  'm-danger': 'danger',
};
const KNOWN_M_TAGS = new Set([
  ...Object.keys(ADMONITIONS),
  'm-steps', 'm-step', 'm-accordiongroup', 'm-accordion',
  'm-cardgroup', 'm-card', 'm-frame',
]);
const OLD_HOSTS = /^https?:\/\/reflow\.mantledocs\.com/;

/**
 * Rewrite a Mantle link to a site-relative path.
 * slugToPath maps a bare page slug ("checkout-settings") to its full path
 * ("/settings/checkout-settings"); Mantle accepts both forms.
 */
export function rewriteHref(href, slugToPath) {
  if (!href) return href;
  let h = href;
  if (OLD_HOSTS.test(h)) h = h.replace(OLD_HOSTS, '') || '/';
  if (!h.startsWith('/')) return href; // external (notion.so, shopify, mailto…)
  const [pathPart, hash] = h.split('#');
  let path = pathPart.replace(/\/$/, '') || '/';
  if (path === '/resources/release-notes') path = '/releases';
  else if (/^\/[a-z0-9-]+$/.test(path) && slugToPath[path.slice(1)]) {
    path = slugToPath[path.slice(1)];
  }
  return hash ? `${path}#${hash}` : path;
}

function makeTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
  });
  td.keep(['kbd']);
  // "- item" / "1. item" with continuation lines indented to the marker width.
  td.addRule('listItem', {
    filter: 'li',
    replacement: (content, node) => {
      const parent = node.parentNode;
      let marker = '- ';
      if (parent.nodeName === 'OL') {
        const start = Number(parent.getAttribute('start') || 1);
        marker = `${start + Array.prototype.indexOf.call(parent.children, node)}. `;
      }
      const body = content.replace(/^\n+/, '').replace(/\n+$/, '')
        .replace(/\n/g, `\n${' '.repeat(marker.length)}`);
      return marker + body + (node.nextSibling ? (/\n\s*\n/.test(content.trim()) ? '\n\n' : '\n') : '');
    },
  });
  return td;
}

/**
 * Convert one Mantle #page-content inner HTML string to Markdown.
 * opts.resolveImage(src, alt) -> new src string (required)
 * opts.slugToPath -> {slug: '/section/slug'}
 * opts.resolveAsset(href) -> replacement URL, or null to unlink; called for
 *   links to Mantle-hosted files (cdn.heymantle.com), e.g. videos
 * opts.knownPaths -> Set of valid site paths; internal links to anything else
 *   are unlinked (text kept) and reported via opts.onDeadLink(href).
 */
export function convertHtml(html, opts) {
  const $ = cheerio.load(`<div id="root">${html}</div>`, null, false);
  const root = $('#root');

  // Fail loudly on any Mantle component we don't know how to convert.
  root.find('*').each((_, el) => {
    if (el.tagName.startsWith('m-') && !KNOWN_M_TAGS.has(el.tagName)) {
      throw new Error(`Unknown Mantle component <${el.tagName}>`);
    }
  });

  // Strip inline styles and Mantle classes; drop empty paragraphs.
  root.find('[style]').removeAttr('style');
  root.find('[class]').removeAttr('class');
  root.find('p').each((_, el) => {
    const p = $(el);
    if (!p.text().trim() && p.find('img').length === 0) p.remove();
  });

  // Images: rewrite src (downloads happen in resolveImage).
  root.find('img').each((_, el) => {
    const img = $(el);
    const alt = (img.attr('alt') || '').trim();
    img.attr('src', opts.resolveImage(img.attr('src'), alt));
    img.attr('alt', alt);
  });

  // Links.
  const linkOrUnlink = (a, rawHref) => {
    if (/^https?:\/\/cdn\.heymantle\.com\//.test(rawHref || '')) {
      const to = opts.resolveAsset ? opts.resolveAsset(rawHref) : null;
      if (to) a.attr('href', to).removeAttr('target').removeAttr('rel');
      else a.replaceWith(a.contents());
      return;
    }
    const href = rewriteHref(rawHref, opts.slugToPath || {});
    if (opts.knownPaths && href.startsWith('/') && !opts.knownPaths.has(href.split('#')[0])) {
      opts.onDeadLink?.(rawHref);
      a.replaceWith(a.contents());
      return;
    }
    a.attr('href', href).removeAttr('target').removeAttr('rel');
  };
  root.find('a[href]').each((_, el) => linkOrUnlink($(el), $(el).attr('href')));

  // m-frame: unwrap.
  root.find('m-frame').each((_, el) => { $(el).replaceWith($(el).contents()); });

  // Innermost-first so nested components convert correctly.
  const reversed = (sel) => root.find(sel).toArray().reverse();

  // m-steps -> <ol>, each step -> <li><p><strong>title</strong></p>…</li>
  for (const el of reversed('m-steps')) {
    const ol = $('<ol></ol>');
    $(el).children('m-step').each((_, step) => {
      const title = $(step).attr('title') || '';
      const li = $('<li></li>');
      if (title) li.append($('<p></p>').append($('<strong></strong>').text(title)));
      li.append($(step).contents());
      ol.append(li);
    });
    $(el).replaceWith(ol);
  }

  // m-accordion -> <h3>title</h3> + content
  for (const el of reversed('m-accordiongroup')) {
    const parts = [];
    $(el).children('m-accordion').each((_, acc) => {
      parts.push($('<h3></h3>').text($(acc).attr('title') || ''));
      parts.push(...$(acc).contents().toArray());
    });
    $(el).replaceWith(parts);
  }

  // m-card -> <li><strong>[title](href)</strong> — text</li>
  for (const el of reversed('m-cardgroup')) {
    const ul = $('<ul></ul>');
    $(el).children('m-card').each((_, card) => {
      const title = $(card).attr('title') || '';
      const href = $(card).attr('href');
      const strong = $('<strong></strong>');
      if (href) {
        const a = $('<a></a>').text(title);
        strong.append(a);
        linkOrUnlink(a, href);
      } else strong.text(title);
      const li = $('<li></li>').append($('<p></p>').append(strong));
      // Card text is sometimes bare (no <p>); wrap it so it isn't glued to the title.
      const body = $(card).contents();
      li.append(body.filter((_, n) => n.type === 'tag' && /^(p|ul|ol|div)$/.test(n.tagName)).length ? body : $('<p></p>').append(body));
      ul.append(li);
    });
    $(el).replaceWith(ul);
  }

  // Admonitions: placeholder elements turndown renders as ::: blocks.
  for (const el of reversed(Object.keys(ADMONITIONS).join(','))) {
    const div = $('<div></div>').attr('data-admonition', ADMONITIONS[el.tagName]);
    div.append($(el).contents());
    $(el).replaceWith(div);
  }

  // <li><p>text</p></li> -> <li>text</li> so simple lists stay tight.
  root.find('li').each((_, el) => {
    const kids = $(el).children();
    if (kids.length === 1 && kids[0].tagName === 'p') $(kids[0]).replaceWith($(kids[0]).contents());
  });

  const td = makeTurndown();
  td.addRule('admonition', {
    filter: (node) => node.nodeName === 'DIV' && node.getAttribute('data-admonition'),
    replacement: (content, node) =>
      `\n\n:::${node.getAttribute('data-admonition')}\n\n${content.trim()}\n\n:::\n\n`,
  });

  let md = td.turndown(root.html());
  md = md.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim() + '\n';
  return md;
}
