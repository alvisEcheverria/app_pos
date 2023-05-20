const { Router } = require('express');
const { createCategory, getAllCategories } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/categories', createCategory);
router.get('/categories', getAllCategories);

module.exports = router; 