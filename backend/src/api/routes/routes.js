// Importa as rotas
const express = require("express");
const routes = express.Router();

// Rota principal servidor
routes.get("/", (req, res) => {
  res.send("Hello Server!");
});


// Pegar todos os processos
routes.get("/processos", (req, res) => {
  res.send("Meus processos!");
});

routes.post("/processos", (req, res) => {
  res.send("Adicionar processo!");
});
module.exports = routes;