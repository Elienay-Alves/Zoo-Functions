const data = require('../data/zoo_data');

const find = (id) => data.species.find((specie) => specie.id === id);
const getSpeciesByIds = (...ids) => ids.map(find);

module.exports = getSpeciesByIds;
