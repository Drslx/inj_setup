const express = require("express");
const app = express();
const port = process.env.PORT;
const router = require("../api/routes/routes");
processRouter = require("../api/routes/routes")

app.use("/", router);
app.use('/processos', processRouter);


// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
