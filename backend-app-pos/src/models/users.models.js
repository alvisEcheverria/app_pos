const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Users = db.define('users', {
    userId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        field: 'user_id'
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_name'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'role_id'
    },
}, {
    hooks: {
        beforeCreate: (user, option)=> {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        }
    }
});

module.exports = Users;