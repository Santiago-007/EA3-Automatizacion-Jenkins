
const TipoProyecto = require('../models/tipoProyecto');
const { request, response } = require('express');

const createTipoProyecto = async (req = request, res = response) => {
    try {
        const tipoProyecto = new TipoProyecto(req.body);
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    } catch (error) {
        console.error('Error al crear tipo de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getTipoProyecto = async (req = request, res = response) => {
    try {
        const tiposProyecto = await TipoProyecto.find();
        return res.status(200).json(tiposProyecto);
    } catch (error) {
        console.error('Error al obtener tipos de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateTipoProyecto = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!tipoProyecto) {
            return res.status(404).json({ msj: 'Tipo de proyecto no encontrado' });
        }

        return res.status(200).json(tipoProyecto);
    } catch (error) {
        console.error('Error al actualizar tipo de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createTipoProyecto,
    getTipoProyecto,
    updateTipoProyecto
};
