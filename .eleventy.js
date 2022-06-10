const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(directoryOutputPlugin);

  return {
    // dataTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
		dir: {
			input: 'src',
			output: 'public'
		}
	};
};