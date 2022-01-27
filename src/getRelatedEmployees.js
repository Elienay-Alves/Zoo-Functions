const data = require('../data/zoo_data');
/*
Considerando a boa prática de dividir o código em partes menores, apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:

1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

    se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
    se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
    */

/*
Como já diria o Jack Estripador, vamos por partes. Primeiros vamos
comentar a função isManager: não vou passar por todo o caminho do
objeto pois está bem legivel. Usei o includes para determinar se a
chave managers do do employee tinha o mesmo elemento passado como
parametro e o .some para retornar se era verdadeiro ou não.

Na segunda função resovi passasr logo pelo teste de erro pra não usar
processamento atoa(nenhum pc merece!) daí lançamos a mensagem de erro
pedida pelo requisito. Após fazermos isso filtramos as pessoas que sim,
eram gerenciadas pelo id requerido e retornamos um array contendo seu
nome e sobrenome
*/

const isManager = (id) => data.employees.some((personId) => personId.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((person) => person.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
