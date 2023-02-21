const excerpt = (post) => {
	const content = post.replace(/(<([^>]+)>)/gi, "");
	return content.substr(0, content.lastIndexOf(" ", 160)) + " [...]";
};

module.exports = excerpt;
