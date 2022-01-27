const data = require('../data/zoo_data');

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

// Fizemos uma função que retorna um array contendo o nome da especie referente ao id inserido no parametro.
// .map () retorna um array contendo as especies selecionadas pelo .find() que analisa se a id passada é igual ao valor contido na chave id.
const getSpeciesByIds = (...ids) => ids.map((id) => data.species
  .find((specie) => specie.id === id));

module.exports = getSpeciesByIds;
