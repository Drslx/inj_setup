// Desc: Arquivo de configuração do banco de dados
// Importando o módulo 'dotenv' para carregar as variáveis de ambiente
require('dotenv').config();

// Importando o módulo 'sequelize' para conexão com o banco de dados
const { Sequelize } = require('sequelize');

// Criando uma instância do Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT // 'mysql', 'postgres', 'sqlite', 'mssql', etc.
});

// Testando a conexão com o banco de dados
(async () => {
  try {
    await sequelize.authenticate(console.log('DB_NAME:', process.env.DB_NAME));
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;
