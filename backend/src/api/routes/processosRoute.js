// Init: 1
const express = require("express");
const router = express.Router();

// Pegar todos os processos
router.get("/", (req, res) => {
  res.send("Meus Processos");
  console.log("Meus Processos LOG!");
});

// Criar um novo processo
router.post("/Novo Processo", (req, res) => {
  res.send("Processo criado");
});

module.exports = router;
