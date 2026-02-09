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
  width: 1920,
  height: 1080,
  plugins: [Markdown, Highlight, Notes],
  // PDF export settings
  pdfSeparateFragments: false, // Don't create separate pages for fragments
  pdfMaxPagesPerSlide: 1,      // One page per slide
}).then(() => {
  Reveal.on('slidechanged', event => {
    const iframe = event.currentSlide.querySelector('iframe[data-src*="clawd-walk"]');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('replay', '*');
    }
  });

  // Add footer to all slides with headings (skip iframe-only slides)
  document.querySelectorAll('.reveal .slides section').forEach(section => {
    // Skip nested sections (vertical slides container)
    if (section.parentElement.tagName === 'SECTION') return;

    // Skip iframe-only slides (no headings)
    if (!section.querySelector('h1, h2, h3, h4, h5, h6')) return;

    const footer = document.createElement('div');
    footer.className = 'slide-footer';
    footer.innerHTML = '<span class="footer-left">2026 Industrial Leadership Meeting</span><span class="footer-right">March 11, 2026</span>';
    section.appendChild(footer);
  });

  // Also handle vertical slides
  document.querySelectorAll('.reveal .slides section section').forEach(section => {
    if (!section.querySelector('h1, h2, h3, h4, h5, h6')) return;

    const footer = document.createElement('div');
    footer.className = 'slide-footer';
    footer.innerHTML = '<span class="footer-left">2026 Industrial Leadership Meeting</span><span class="footer-right">March 11, 2026</span>';
    section.appendChild(footer);
  });

  // Projection guides — toggle with G key
  const guides = document.createElement('div');
  guides.className = 'projection-guides';
  guides.innerHTML =
    '<div class="guide-title-safe">' +
      '<span class="guide-label guide-label-tl">Title Safe &mdash; 5%</span>' +
      '<span class="guide-label guide-label-br">1920 &times; 1080</span>' +
    '</div>' +
    '<div class="guide-content-zone">' +
      '<span class="guide-label guide-label-tl">Content Zone</span>' +
      '<span class="guide-label guide-label-tr">7% H &middot; 7% T &middot; 12% B</span>' +
    '</div>' +
    '<span class="guide-dim guide-dim-top">&uarr; 2% pad (40px) &darr;</span>' +
    '<span class="guide-dim guide-dim-left">&larr; 2% pad (40px) &rarr;</span>' +
    '<span class="guide-dim guide-dim-bottom">&uarr; 7% pad (76px &plus; footer) &darr;</span>';
  document.querySelector('.reveal .slides').appendChild(guides);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'g' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      guides.classList.toggle('visible');
    }
  });
});
