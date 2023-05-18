const { Users } = require('../models');

class UsersServices {
    static async create(newUser){
        try {
            const result = await Users.create(newUser)
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Users.findAll({
                attributes: ['userId', 'userName', 'roleId']
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices;