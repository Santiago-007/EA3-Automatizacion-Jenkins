
const Universidad = require('../models/universidad');
const { request, response } = require('express');

const createUniversidad = async (req = request, res = response) => {
    try {
        const universidad = new Universidad(req.body);
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (error) {
        console.error('Error al crear universidad:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getUniversidad = async (req = request, res = response) => {
    try {
        const universidades = await Universidad.find();
        return res.status(200).json(universidades);
    } catch (error) {
        console.error('Error al obtener universidades:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateUniversidad = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const universidad = await Universidad.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!universidad) {
            return res.status(404).json({ msj: 'Universidad no encontrada' });
        }

        return res.status(200).json(universidad);
    } catch (error) {
        console.error('Error al actualizar universidad:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createUniversidad,
    getUniversidad,
    updateUniversidad
};
