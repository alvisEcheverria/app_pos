const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Roles = db.define('roles', {
    roleId : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'role_id'
    },
    roleName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        field: 'role_name'
    },
});

module.exports = Roles;