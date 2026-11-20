
const { Schema, model } = require('mongoose');

const ProyectoSchema = new Schema({
    numero: {
        type: String,
        unique: true,
        required: [true, 'Numero unico del proyecto requerido']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo del proyecto requerido'],
        minlength: 1
    },
    fechaInicio: {
        type: Date
    },
    fechaEntrega: {
        type: Date
    },
    valor: {
        type: Number,
        min: 0
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
});

module.exports = model('Proyecto', ProyectoSchema);
