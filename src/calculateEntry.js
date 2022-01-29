const data = require('../data/zoo_data');

/*
Bora lá. A primeira parte é ter certeza que tem algo no parametro passado. Nesse caso
já deixamos claro que se não tiver um argumento ou o objeto estiver vazio deve retornar 0.
Após isso filtramos as idades e colocamos a quantidade de visitantes de cada faixa estaria
dentro de suas respectivas chaves e retornamos um objeto contendo essas keys e seus respectivos
valores.

Na segunda função capturamos a primeira e depois usamos o Object.values para nos trazer
somente os valores que estão no objeto que capturamos. Também aqui passamos um if para
caso o valor do totalEntries esteja vazio e depois criamos um um objeto que vai retornar
o total da multiplicação do total de visitantes de cada faixa etaria pelo preço
respectivo da entrada.
Agora retornamos o Total a ser cobrado usanso o Object.values para pegar esses valores e
somando eles com o reduce.

*/
const countEntrants = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  return {
    child: entrants.filter((childs) => childs.age < 18).length,
    adult: entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length,
    senior: entrants.filter((seniors) => seniors.age >= 50).length,
  };
};

const calculateEntry = (entrants) => {
  const totalEntries = countEntrants(entrants);
  const numberofVisitants = Object.values(totalEntries);

  if (!totalEntries) return 0;

  const price = {
    child: numberofVisitants[0] * data.prices.child,
    adult: numberofVisitants[1] * data.prices.adult,
    senior: numberofVisitants[2] * data.prices.senior,
  };

  return Object.values(price).reduce((acc, number) => acc + number);
};

module.exports = { calculateEntry, countEntrants };
