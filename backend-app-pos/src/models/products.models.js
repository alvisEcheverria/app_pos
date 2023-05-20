const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Products = db.define('products', {
    productId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'product_id'
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    },
    nameProduct: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'emission_point'
    },
    quantity: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    unitMeasure: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: 'unit_measure'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

module.exports = Products;