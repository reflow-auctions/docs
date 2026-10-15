import React, { useState } from 'react';
import styles from './styles.module.css';

// Click-to-load YouTube player.
// - Before click: only a thumbnail from i.ytimg.com; no YouTube player, no cookies.
// - After click: youtube-nocookie.com player, autoplaying.
// - rel=0: end-of-video suggestions come from our own channel only
//   (YouTube no longer allows turning suggestions off entirely).
// Ads cannot be disabled from an embed; that is YouTube's decision.
// Used from Markdown via the ::youtube directive (src/remark/youtube.mjs).
export default function YouTube({ id, title = 'Video' }) {
  const [playing, setPlaying] = useState(false);
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });

  return (
    <div className={styles.frame}>
      {playing ? (
        <iframe
          className={styles.media}
          src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className={styles.poster}
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <img
            className={styles.media}
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className={styles.play} aria-hidden="true" />
          <span className={styles.caption}>{title}</span>
        </button>
      )}
      <noscript>
        <a href={`https://www.youtube.com/watch?v=${id}`}>Watch “{title}” on YouTube</a>
      </noscript>
    </div>
  );
}
