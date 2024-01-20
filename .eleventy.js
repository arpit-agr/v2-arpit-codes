/**
 * I strive to keep the `.eleventy.js` file clean and uncluttered. Most adjustments must be made in:
 *  - `./config/collections/index.js`
 *  - `./config/filters/index.js`
 *  - `./config/plugins/index.js`
 *  - `./config/shortcodes/index.js`
 *  - `./config/transforms/index.js`
 */

const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

// Importing from config
const getPages = require("./config/collections/pages.js");
const getNotes = require("./config/collections/notes.js");
const getLikes = require("./config/collections/likes.js");
const md = require("./config/filters/md.js");
const { readableDate, htmlDate } = require("./config/filters/date.js");
const addNbsp = require("./config/filters/add-nbsp.js");
const excerpt = require("./config/filters/excerpt.js");
const getAllTags = require("./config/filters/getAllTags.js");
const filterTagList = require("./config/filters/filterTagList.js");
const excludeTag = require("./config/filters/excludeTag.js");
const codetitle = require("./config/shortcodes/codetitle.js");
const markdown = require("./config/plugins/md.js");
const assetHash = require("./config/plugins/asset-hash.js");
const drafts = require("./config/plugins/drafts.js");
const htmlmin = require("./config/transforms/html-min.js");
const lightningCSS = require("./config/template-languages/css-config.js");

module.exports = function (eleventyConfig) {
	//Add Collections
	eleventyConfig.addCollection("pages", getPages);
	eleventyConfig.addCollection("notes", getNotes);
	eleventyConfig.addCollection("likes", getLikes);

	//Add Filters
	eleventyConfig.addFilter("md", md);
	eleventyConfig.addFilter("htmlDate", htmlDate);
	eleventyConfig.addFilter("readableDate", readableDate);
	eleventyConfig.addFilter("addNbsp", addNbsp);
	eleventyConfig.addFilter("excerpt", excerpt);
	eleventyConfig.addFilter("getAllTags", getAllTags);
	eleventyConfig.addFilter("filterTagList", filterTagList);
	eleventyConfig.addFilter("excludeTag", excludeTag);

	//Add Plugins
	eleventyConfig.addPlugin(markdown);
	eleventyConfig.addPlugin(assetHash);
	eleventyConfig.addPlugin(directoryOutputPlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(htmlmin);
	eleventyConfig.addPlugin(drafts);
	eleventyConfig.addPlugin(EleventyRenderPlugin);

	//Shortcode
	eleventyConfig.addShortcode("codetitle", codetitle);

	//Custom Template Languages
	eleventyConfig.addPlugin(lightningCSS);

	//Passthrough copy
	eleventyConfig.addPassthroughCopy("./src/assets/fonts");
	eleventyConfig.addPassthroughCopy("./src/assets/images");
	eleventyConfig.addPassthroughCopy("./src/assets/scripts");
	eleventyConfig.addPassthroughCopy({ "./src/assets/favicons": "/" });
	// eleventyConfig.addPassthroughCopy("./src/manifest.webmanifest");

	eleventyConfig.setServerOptions({
		showAllHosts: true,
	});
	eleventyConfig.setQuietMode(true);

	return {
		dataTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "public",
		},
	};
};
