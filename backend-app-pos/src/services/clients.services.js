const { Clients } = require('../models');

class ClientsServices {
    static async create(newClient){
        try {
            const result = await Clients.create(newClient);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Clients.findAll({
                attributes: ['clientId', 'clientName', 'identification', 'direction', 'phone', 'email']
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ClientsServices;