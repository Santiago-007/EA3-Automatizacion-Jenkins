
const express = require('express');
const router = express.Router();

const {
    listarClientes,
    crearCliente,
    actualizarCliente
} = require('../controllers/clienteController');

// Listar clientes
router.get('/', listarClientes);

// Crear cliente
router.post('/', crearCliente);

// Actualizar cliente
router.put('/:id', actualizarCliente);

module.exports = router;
