
const Etapa = require('../models/etapa');
const { request, response } = require('express');

const createEtapa = async (req = request, res = response) => {
    try {
        const etapa = new Etapa(req.body);
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (error) {
        console.error('Error al crear etapa:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getEtapa = async (req = request, res = response) => {
    try {
        const etapas = await Etapa.find();
        return res.status(200).json(etapas);
    } catch (error) {
        console.error('Error al obtener etapas:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateEtapa = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const etapa = await Etapa.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!etapa) {
            return res.status(404).json({ msj: 'Etapa no encontrada' });
        }

        return res.status(200).json(etapa);
    } catch (error) {
        console.error('Error al actualizar etapa:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createEtapa,
    getEtapa,
    updateEtapa
};
