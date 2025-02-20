// Importa as rotas
const express = require("express");
const router = express.Router();
const processController = require('../controllers/processoController');

// Rota principal servidor
router.get("/", (req, res) => {
  res.send("Hello Server!");
});


// Vem do controller
router.post('/', processController.createProcess);
router.get('/:id', processController.getProcess);
router.put('/:id', processController.updateProcess);
router.delete('/:id', processController.getProcess);

module.exports = router;