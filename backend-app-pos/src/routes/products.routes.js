const { Router } = require('express');
const { createProducts, getAllProducts } = require('../controllers');

const router = Router();

router.post('/products', createProducts);
router.get('/products', getAllProducts);

module.exports = router; 