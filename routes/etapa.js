
const { Router } = require('express');
const {
    createEtapa,
    getEtapa,
    updateEtapa
} = require('../controllers/etapa');

const router = Router();

router.post('/', createEtapa);
router.get('/', getEtapa);
router.put('/:id', updateEtapa);

module.exports = router;
