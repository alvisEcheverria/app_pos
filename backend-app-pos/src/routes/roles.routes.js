const { Router } = require('express');
const { rolesRegister } = require('../controllers');

const router = Router();

router.post('/roles', rolesRegister);

module.exports = router; 