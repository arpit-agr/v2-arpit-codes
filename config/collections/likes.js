// Likes
const getLikes = (collection) => {
	return collection.getFilteredByGlob("src/likes/**/*.md");
};

module.exports = getLikes;
