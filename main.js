import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './style.css';

Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  transition: 'slide',
  plugins: [Markdown, Highlight, Notes],
}).then(() => {
  const titleSlide = Reveal.getSlide(0);
  if (!titleSlide) return;

  titleSlide.classList.add('vanta-slide');
  Object.assign(titleSlide.style, {
    position: 'relative',
    width: '100%',
    height: '100%',
  });

  // Create iframe behind text
  const iframe = document.createElement('iframe');
  iframe.src = 'vanta-bg.html';
  iframe.frameBorder = '0';
  Object.assign(iframe.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100vw',
    height: '100vh',
    transform: 'translate(-50%, -50%)',
    zIndex: '0',
    pointerEvents: 'none',
    border: 'none',
  });
  titleSlide.insertBefore(iframe, titleSlide.firstChild);

  // Lift all other children above the iframe
  Array.from(titleSlide.children).forEach(child => {
    if (child !== iframe) {
      child.style.position = 'relative';
      child.style.zIndex = '1';
    }
  });
});
