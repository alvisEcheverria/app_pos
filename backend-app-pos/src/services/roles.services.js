const { Roles } = require('../models');

class RolesServices {
    static async create(newRol){
        try {
            const result = await Roles.create(newRol)
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Roles.findAll({
                attributes: ['roleId', 'roleName']
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = RolesServices;