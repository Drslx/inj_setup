// Server Node.js
const express = require("express");
const app = express();
const port = process.env.PORT;

// Rotas
const processos = require("../api/routes/processosRoute");

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.use("/processos", processos);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
