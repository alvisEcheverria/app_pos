const { Router } = require('express');
const { addProductToOrder, getOrder, updateOrder, delProductInOrder, cancelAnOrder } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/orders', addProductToOrder);
router.get('/orders/:orderId', getOrder);
router.patch('/orders/:orderId', updateOrder);
router.delete('/orders/:orderId/products/:productId', delProductInOrder);
router.delete('/orders/:orderId', cancelAnOrder);

module.exports = router; 