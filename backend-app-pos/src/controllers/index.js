const { rolesRegister, getAllRoles } = require('./roles.controllers');
const { userRegister, getAllUsers } = require('./users.controllers');
const { clientRegister, getAllClients } = require('./clients.controllers');
const { userLogin } = require('./auth.controllers');
const { createCategory, getAllCategories } = require('./categories.controllers');
const { createProducts, getAllProducts } = require('./products.controllers');
const { addProductToOrder, getOrder, updateOrder, delProductInOrder, cancelAnOrder } = require('./orders.controllers');
const { genInvoice, getInvoice, delInvoice } = require('./invoice.controllers');

module.exports = {
    rolesRegister,
    getAllRoles,
    userRegister,
    getAllUsers,
    clientRegister,
    getAllClients,
    userLogin,
    createCategory,
    getAllCategories,
    createProducts,
    getAllProducts,
    addProductToOrder,
    getOrder,
    updateOrder,
    delProductInOrder,
    cancelAnOrder,
    genInvoice,
    getInvoice,
    delInvoice
}