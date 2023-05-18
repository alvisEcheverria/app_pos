const { UsersServices } = require('../services'); 

const userRegister = async (req, res, next) =>{
    try {
        const newUser = req.body;
        const result = await UsersServices.create(newUser)
        res.json(result);
    } catch (error) {
        next({
            message: "El usuario no se pudo crear, campos incompletos o mal estructurados.",
            status: 400,
            errorContent: error
          });
    }
}

const getAllUsers = async (req, res, next) =>{
    try {
        const users = await UsersServices.getAll();
        res.json(users)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salió mal'
        })
    }
}

module.exports = {
    userRegister,
    getAllUsers
}