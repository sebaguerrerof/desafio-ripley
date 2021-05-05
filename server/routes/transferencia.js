const express = require("express");
const router = express.Router();
const transferenciaController = require('../controllers/transferenciaController');

// api/transferencias
router.post('/', transferenciaController.crearTransferencia);
router.get('/', transferenciaController.obtenerTransferencias);

module.exports = router;