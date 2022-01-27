const data = require('../data/zoo_data');
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

// Essa função encontra com .find os animais que tem o nome da espécie igual ao passado no parametro e mostra com o .every todos os que tem o valor age maior que o passado no parametro.

const getAnimalsOlderThan = (animal, age) => data.species
  .find((animale) => animale.name === animal).residents.every((resident) => resident.age > age);

module.exports = getAnimalsOlderThan;
