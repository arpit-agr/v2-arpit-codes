const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(bundlerPlugin, {
		transforms: [
			async function (code) {
				if (process.env.NODE_ENV === "production") {
					return new CleanCSS({}).minify(code).styles;
				} else {
					return code;
				}
			},
		],
	});
};
