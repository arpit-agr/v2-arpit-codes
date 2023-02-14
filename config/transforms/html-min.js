const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (
			process.env.NODE_ENV === "production" &&
			path &&
			path.endsWith(".html")
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: false,
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
			});
			return minified;
		}

		return content;
	});
};
