const { rolesRegister } = require('./roles.controllers');
const { userRegister, getAllUsers } = require('./users.controllers');
const { clientRegister, getAllClients } = require('./clients.controllers');
const { userLogin } = require('./auth.controllers');

module.exports = {
    rolesRegister,
    userRegister,
    getAllUsers,
    clientRegister,
    getAllClients,
    userLogin,
}