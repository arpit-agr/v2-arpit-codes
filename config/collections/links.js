// Links
const getLinks = collection => {
	return collection.getFilteredByGlob('src/links/**/*.md');
};

module.exports = getLinks;
