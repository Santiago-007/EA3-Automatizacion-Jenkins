
const { Router } = require('express');
const {
    createCliente,
    getCliente,
    updateCliente
} = require('../controllers/cliente');

const router = Router();

router.post('/', createCliente);
router.get('/', getCliente);
router.put('/:id', updateCliente);

module.exports = router;
