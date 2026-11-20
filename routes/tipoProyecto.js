const { Router } = require('express');
const {
    createTipoProyecto,
    getTipoProyecto,
    updateTipoProyecto
} = require('../controllers/tipoProyecto');

const router = Router();

router.post('/', createTipoProyecto);
router.get('/', getTipoProyecto);
router.put('/:id', updateTipoProyecto);

module.exports = router;
