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
}

module.exports = RolesServices;