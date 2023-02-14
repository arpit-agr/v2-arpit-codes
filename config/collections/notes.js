// Notes
const getNotes = (collection) => {
	return collection.getFilteredByGlob("src/notes/**/*.md");
};

module.exports = getNotes;
