
const { Router } = require('express');
const {
    createUniversidad,
    getUniversidad,
    updateUniversidad
} = require('../controllers/universidad');

const router = Router();

router.post('/', createUniversidad);
router.get('/', getUniversidad);
router.put('/:id', updateUniversidad);

module.exports = router;
