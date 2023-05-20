const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Orders = db.define('orders', {
    orderId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'order_id'
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'client_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'purchased'),
        defaultValue: 'active'
    }
});

module.exports = Orders;