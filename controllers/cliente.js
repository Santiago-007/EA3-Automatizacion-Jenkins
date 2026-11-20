
const Cliente = require('../models/cliente');
const { request, response } = require('express');

const createCliente = async (req = request, res = response) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (error) {
        console.error('Error al crear cliente:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getCliente = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.find();
        return res.status(200).json(clientes);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateCliente = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const cliente = await Cliente.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!cliente) {
            return res.status(404).json({ msj: 'Cliente no encontrado' });
        }

        return res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createCliente,
    getCliente,
    updateCliente
};
