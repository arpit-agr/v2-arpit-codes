const path = require("path");
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib
			.use(markdownItEleventyImg, {
				imgOptions: {
					widths: [400, 800, 1200],
					formats: ["avif", "webp", "auto"],
					urlPath: "/assets/images/scaled",
					outputDir: "public/assets/images/scaled",
				},
				globalAttributes: {
					class: "note-image",
					sizes: "(min-width: 85rem) 80vw, 100vw",
					loading: "lazy",
					decoding: "async",
				},
				renderImage(image, attributes) {
					const [Image, options] = image;
					const [src, attrs] = attributes;

					Image(src, options);

					const metadata = Image.statsSync(src, options);
					const imageMarkup = Image.generateHTML(metadata, attrs, {
						whitespaceMode: "inline",
					});

					return `<figure class="flow">${imageMarkup}${
						attrs.title
							? `<figcaption class="step--1 color:secondary">${attrs.title}</figcaption>`
							: ""
					}</figure>`;
				},
				resolvePath: (filepath, env) => {
					let isContentImage = filepath.startsWith("./");
					if (isContentImage) {
						// Resolve path to content-relative images
						return path.join(path.dirname(env.page.inputPath), filepath);
					} else {
						// Resolve path to global images
						return path.join("public", filepath);
					}
				},
			})
			.use(markdownItFootnote)
			.use(markdownItAttrs);

		mdLib.renderer.rules.footnote_caption = (tokens, idx) => {
			let n = Number(tokens[idx].meta.id + 1).toString();

			if (tokens[idx].meta.subId > 0) {
				n += ":" + tokens[idx].meta.subId;
			}

			return n;
		};
		mdLib.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
			let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
			let caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
			let refid = id;

			if (tokens[idx].meta.subId > 0) {
				refid += ":" + tokens[idx].meta.subId;
			}

			return `
				<sup class="footnote-ref step--2">
					<a href="#fn${id}" id="fref${refid}" aria-label="Footnote ${caption}">[${caption}]</a></sup>
			`;
		};
		mdLib.renderer.rules.footnote_block_open = (tokens, idx, options) => {
			return (
				(options.xhtmlOut
					? '<hr class="footnotes-sep" />\n'
					: '<hr class="footnotes-sep">\n') +
				'<section class="footnotes flow">\n' +
				'<h2 id="footnotes-heading" class="heading-3">Footnotes</h2>' +
				'<ol class="footnotes-list" role="list" aria-labelledby="footnotes-heading">\n'
			);
		};
		mdLib.renderer.rules.footnote_open = (tokens, idx, options, env, slf) => {
			let n = Number(tokens[idx].meta.id + 1).toString();
			let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

			if (tokens[idx].meta.subId > 0) {
				n += ":" + tokens[idx].meta.subId;
				id += ":" + tokens[idx].meta.subId;
			}

			return `
				<li id="fn${id}" class="footnote-item grid">
					<span class="footnote-item-counter">${n}.</span>
			`;
		};

		mdLib.renderer.rules.footnote_close = () => {
			return `
			</li>
			`;
		};

		mdLib.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
			let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

			if (tokens[idx].meta.subId > 0) {
				id += ":" + tokens[idx].meta.subId;
			}

			/* ↩ with escape code to prevent display as Apple Emoji on iOS */
			return `
					<a 
						href="#fref${id}" 
						class="footnote-backref"
						aria-label="Backlink to footnote ${id}"
					>
						\u21a9\uFE0E
					</a>
				`;
		};
	});
};
