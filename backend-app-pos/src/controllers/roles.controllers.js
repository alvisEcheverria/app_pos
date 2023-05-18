const { RolesServices } = require('../services'); 

const rolesRegister = async (req, res, next) =>{
    try {
        const newRol = req.body;
        console.log(newRol);
        const result = await RolesServices.create(newRol);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        })
    }
}

module.exports = {
    rolesRegister
}