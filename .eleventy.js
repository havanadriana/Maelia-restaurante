const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/images')

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}

function slideToggle(myEvent) {
  myEvent.preventDefault();

  var myTarget = this.getAttribute('href');
  var theBlock = document.querySelector(myTarget);
  var finalHeight = theBlock.querySelector('.content-block').clientHeight;
  if (theBlock.classList.contains('is-open')) {
    theBlock.classList.remove('is-open');
    theBlock.style.maxHeight = 0;
  } else {
    theBlock.classList.add('is-open');
    theBlock.style.maxHeight = finalHeight + 'px';
  }
}

document.querySelectorAll('.trigger').forEach(function(myElement) {
  myElement.addEventListener('click', slideToggle);
});