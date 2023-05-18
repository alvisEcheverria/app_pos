const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
    categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'category_id'
    },
    categoryName: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    }
});

module.exports = Categories;