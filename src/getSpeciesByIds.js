const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((species) => species.id === id));
}

module.exports = getSpeciesByIds;
