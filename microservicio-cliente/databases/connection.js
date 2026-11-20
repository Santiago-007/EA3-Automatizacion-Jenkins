
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexion a MongoDB OK');
    } catch (error) {
        console.error('Error al conectarse a MongoDB:', error.message);
    }
};

module.exports = { mongoConn };
