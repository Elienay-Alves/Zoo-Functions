const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeInfo = employees.find((employee) => employee.id === id);
  const firstAnimalResponsible = data.species.find((specie) => specie.id === employeeInfo
    .responsibleFor[0]);
  const oldestResident = firstAnimalResponsible.residents
    .sort((resident1, resident2) => resident2.age - resident1.age);
  return [oldestResident[0].name, oldestResident[0].sex, oldestResident[0].age];
}

module.exports = getOldestFromFirstSpecies;
