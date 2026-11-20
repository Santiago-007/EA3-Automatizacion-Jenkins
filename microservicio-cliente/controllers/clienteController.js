
const Cliente = require('../models/cliente');

// Listar clientes
const listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear cliente
const crearCliente = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        const clienteGuardado = await nuevoCliente.save();

        res.status(201).json(clienteGuardado);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar cliente
const actualizarCliente = async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                fechaActualizacion: Date.now()
            },
            { new: true, runValidators: true }
        );

        if (!clienteActualizado) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.status(200).json(clienteActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    listarClientes,
    crearCliente,
    actualizarCliente
};
