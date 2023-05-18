const { Roles, Users, Clients, Categories, Products, Orders, OrderDetails, Invoice } = require('./index');

const initModels = () =>{

    Users.belongsTo(Roles, {as: 'role', foreignKey: 'role_id'});
    Roles.hasMany(Users, {as: 'user', foreignKey: 'role_id'})

    Orders.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});
    Users.hasMany(Orders, {as: 'order', foreignKey: 'user_id'});

    Orders.belongsTo(Clients, {as: 'client', foreignKey: 'client_id'});
    Clients.hasMany(Orders, {as: 'order', foreignKey: 'client_id'});

    OrderDetails.belongsTo(Orders, {as: 'order', foreignKey: 'order_id'});
    Orders.hasMany(OrderDetails, {as: 'order_details', foreignKey: 'order_id'});

    OrderDetails.belongsTo(Products, {as: 'product', foreignKey: 'product_id'});
    Products.hasMany(OrderDetails, {as: 'order_details', foreignKey: 'product_id'});

    Invoice.belongsTo(Orders, {as: 'order', foreignKey: 'order_id'});
    Orders.hasOne(Invoice, {as: 'invoice', foreignKey: 'order_id'});

    Products.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(Products, {as: 'product', foreignKey: 'category_id'});

};

module.exports = initModels;