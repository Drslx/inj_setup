const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_processos", "root", "db2302", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o banco de dados: ${error}`);
  });
