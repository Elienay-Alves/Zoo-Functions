const data = require('../data/zoo_data');
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// Nossa função primeiramente lida com caso de não preencimento do parametro e caso isso ocorra ela retorna um array vazio, caso contrario usamos o .find para encotrar e retornar o first ou lastName que bata com o passado no parametro.
const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
};

module.exports = getEmployeeByName;
