const { Router } = require('express');
const { clientRegister, getAllClients } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/clients', clientRegister);
router.get('/clients', authenticate, getAllClients);

module.exports = router; 