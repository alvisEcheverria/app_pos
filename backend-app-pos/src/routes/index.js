const rolesRoutes = require('./roles.routes');
const userRoutes = require('./users.routes');
const clientRoutes = require('./clients.routes')
const authRoutes = require('./auth.routes');
const categoriesRoutes = require('./categories.routes');
const productsRoutes = require('./products.routes');
const ordersRoutes = require('./orders.routes');
const invoiceRoutes = require('./invoice.routes');

module.exports = {
    rolesRoutes,
    userRoutes,
    clientRoutes,
    authRoutes,
    categoriesRoutes,
    productsRoutes,
    ordersRoutes,
    invoiceRoutes
}