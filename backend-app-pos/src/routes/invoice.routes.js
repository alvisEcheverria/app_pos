const { Router } = require('express');
const { genInvoice, getInvoice, delInvoice } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/invoice', genInvoice);
router.get('/invoice', getInvoice);
router.delete('/invoice/:invoiceId', delInvoice);

module.exports = router; 