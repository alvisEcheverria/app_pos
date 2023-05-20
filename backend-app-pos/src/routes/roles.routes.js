const { Router } = require('express');
const { rolesRegister, getAllRoles } = require('../controllers');

const router = Router();

router.post('/roles', rolesRegister);
router.get('/roles', getAllRoles);

module.exports = router; 