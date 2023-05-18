const { ClientsServices } = require('../services'); 

const clientRegister = async (req, res, next) =>{
    try {
        const newClient = req.body;
        const result = await ClientsServices.create(newClient);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        })
    }
}

const getAllClients = async (req, res, next) =>{
    try {
        const clients = await ClientsServices.getAll();
        res.json(clients)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salió mal'
        })
    }
}

module.exports = {
    clientRegister,
    getAllClients
}