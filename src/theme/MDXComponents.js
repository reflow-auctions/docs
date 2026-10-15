import MDXComponents from '@theme-original/MDXComponents';
import YouTube from '@site/src/components/YouTube';

// Make <YouTube> available to every doc and release page without imports,
// so the ::youtube Markdown directive can render it.
export default {
  ...MDXComponents,
  YouTube,
};
