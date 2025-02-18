const express = require("express");
const app = express();
const port = process.env.PORT;

// Importa as rotas
const routes = require("../api/routes/routes");
//const processosRouter = require("../api/routes/pages/...");

// Usa as rotas
app.use("/", routes);
//app.use("/processos", processosRouter);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
