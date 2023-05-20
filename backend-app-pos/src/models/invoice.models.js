const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Invoice = db.define('invoice', {
    invoiceId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'invoice_id'
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id'
    },
    establishment: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    emissionPoint: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'emission_point'
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    totalTax: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'total_tax'
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

module.exports = Invoice;