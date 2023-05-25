module.exports = function() {
    eleventyConfig.addFilter("findIndex", function(array, url) {
      return array.findIndex(item => item.url === url);
    });
  };
  