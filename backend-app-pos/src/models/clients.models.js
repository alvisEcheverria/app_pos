const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Clients = db.define('clients', {
    clientId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        field: 'client_id'
    },
    identification: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    clientName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'client_name'
    },
    direction: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
});

module.exports = Clients;