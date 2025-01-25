// Desc: Arquivo principal da aplicação
// Date: 2021-05-23
require('dotenv').config();
const server = require("./backend/src/config/server"); // Importa o servidor
const db = require("./backend/src/config/db"); // Importa o banco de dados
const rotas = require("./backend/src/api/routes/processosRoute"); // Importa as rotas