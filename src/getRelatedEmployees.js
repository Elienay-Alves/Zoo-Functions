const data = require('../data/zoo_data');

// .some retorna true se ao menos um valor for verdadeiro
// .includes determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

function isManager(id) {
  return data.employees.some((personId) => personId.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((person) => person.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
