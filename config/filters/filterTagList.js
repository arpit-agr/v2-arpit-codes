const filterTagList = tags => {
	return (tags || []).filter(tag => ['all', 'notes', 'links'].indexOf(tag) === -1);
};

module.exports = filterTagList;
