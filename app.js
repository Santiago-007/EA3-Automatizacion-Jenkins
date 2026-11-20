
const express = require('express');
const { mongoConn } = require('./databases/connection');
require('dotenv').config();
const cors = require('cors');

mongoConn();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Rutas
const proyecto = require('./routes/proyecto');
const universidad = require('./routes/universidad');
const etapa = require('./routes/etapa');
const tipoProyecto = require('./routes/tipoProyecto');

// Conexión de módulos
app.use('/api/v1/proyecto', proyecto);
app.use('/api/v1/universidad', universidad);
app.use('/api/v1/etapa', etapa);
app.use('/api/v1/tipoProyecto', tipoProyecto);

module.exports = app;
