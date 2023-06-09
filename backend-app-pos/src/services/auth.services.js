const  { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices {
    static async authenticate(credentials){
        try {
            const { userName, password } = credentials;
            const result = await Users.findOne({
                where: { userName }
            })
            if(result){
                const isValid = bcrypt.compareSync(password, result.password);
                return isValid ? { isValid, result } : isValid
            }
            return result;
        } catch (error) {
            throw error
        }
    }

    static getToken(data){
        try {
            const token = jwt.sign(data, process.env.SECRET, {
                algorithm: 'HS512',
                expiresIn: '1d'
            });
            return token;
        } catch (error) {
            throw error
        }
    }
}

module.exports = AuthServices;