
const { Router } = require('express');
const {
    createProyecto,
    getProyecto,
    updateProyecto
} = require('../controllers/proyecto');

const router = Router();

router.post('/', createProyecto);
router.get('/', getProyecto);
router.put('/:id', updateProyecto);

module.exports = router;
