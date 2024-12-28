// index.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/src/views/index.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log();
});
