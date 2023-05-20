const { CategoriesServices } = require('../services'); 

const createCategory = async (req, res, next) =>{
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.create(newCategory);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        })
    }
}

const getAllCategories = async (req, res, next) =>{
    try {
        const categories = await CategoriesServices.getAll();
        res.json(categories)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salió mal'
        })
    }
}

module.exports = {
    createCategory,
    getAllCategories
}