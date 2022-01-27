const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animale) => animale.name === animal)
    .residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
