const data = require('../data/zoo_data');

/*
Primeiro declaramos que se nenhum argumento for passado o forEach vai por em key uma chave para o nome
de cada especie e o valor de cada será a quantidade de residentes e depois vamos retornar keys com esses dados.

Após isso vamos verificar e quantidade de chaves do argumento passado para ver se é igual a 1, nesse caso vamos
retornar a quantidade de animais passado pelo argumento após termos encontrado com o find a espécie equivalente.

No caso da pessoa passar tanto a especie quanto o sexo vamos retornar a quantidade de animais que foi especificado após filtrar usando o... adivinhe? Isso mesmo, o filter para ver o sexo que é igual ao sexo passado como parametro.
*/
const countAnimals = (animal) => {
  const key = {};

  if (!animal) {
    data.species.forEach((specie) => {
      key[specie.name] = specie.residents.length;
    });
    return key;
  }

  if (Object.keys(animal).length === 1) {
    return data.species.find((specie) => animal.specie === specie.name).residents.length;
  }

  return data.species.find((specie) => animal.specie === specie.name).residents
    .filter((resident) => resident.sex === animal.sex).length;
};

module.exports = countAnimals;
