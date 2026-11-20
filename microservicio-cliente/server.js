
const app = require('./app');

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
    console.log(`Microservicio de Clientes iniciado en el puerto ${PORT}`);
});
