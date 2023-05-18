const { Router } = require('express');
const { userRegister, getAllUsers } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/users', userRegister);
router.get('/users', authenticate, getAllUsers);

module.exports = router; 