const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexion OK");
    } catch (e) {
        console.error("Error al conectarse:", e.message);
    }
};

module.exports = { mongoConn };