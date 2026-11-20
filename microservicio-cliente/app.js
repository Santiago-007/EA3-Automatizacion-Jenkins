
const express = require('express');
const cors = require('cors');
const { mongoConn } = require('./databases/connection');

require('dotenv').config();

const app = express();

// Conexión a MongoDB
mongoConn();

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta del módulo Cliente
const cliente = require('./routes/cliente');

app.use('/api/v1/cliente', cliente);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Microservicio de Clientes funcionando correctamente'
    });
});

module.exports = app;
