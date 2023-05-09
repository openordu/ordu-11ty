// markdown-carousel.js

const MarkdownIt = require('markdown-it');
const container = require('markdown-it-container');

const md = new MarkdownIt();

md.use(container, 'carousel', {
  validate(params) {
    return params.trim().match(/^carousel(start|end)$/);
  },

  render(tokens, idx) {
    const token = tokens[idx];

    if (token.nesting === 1) {
      return '<div id="carouselExample" class="carousel slide">\n<div class="carousel-inner">\n';
    } else {
      return '</div>\n<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>\n';
    }
  },
});

md.use(container, 'slide', {
  validate(params) {
    return params.trim().match(/^slide\s+(.*)$/);
  },

  render(tokens, idx) {
    const token = tokens[idx];

    if (token.nesting === 1) {
      const title = token.info.trim().match(/^slide\s+(.*)$/)[1];

      if (tokens[idx - 2]?.nesting === -1 && tokens[idx - 2]?.info.trim() === 'carouselend') {
        return `<div class="carousel-item active">\n<p class="lead">${title}</p>\n`;
      } else {
        return `<div class="carousel-item">\n<p class="lead">${title}</p>\n`;
      }
    } else {
      return '</div>\n';
    }
  },
});

module.exports = md;
