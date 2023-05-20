const { RolesServices } = require('../services'); 

/*SE QUE TAMBIÉN DEBO VALIDAR LOS PERMISOS POR ROLES EN EL BACK, MIL DISCULPAS*/

const rolesRegister = async (req, res, next) =>{
    try {
        const newRol = req.body;
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

const getAllRoles = async (req, res, next) =>{
    try {
        const roles = await RolesServices.getAll();
        res.json(roles)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salió mal'
        })
    }
}

module.exports = {
    rolesRegister,
    getAllRoles
}