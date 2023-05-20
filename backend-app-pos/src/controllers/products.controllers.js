const { ProductsServices } = require('../services'); 

const createProducts = async (req, res, next) =>{
    try {
        const newProduct = req.body;
        const result = await ProductsServices.create(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        })
    }
}

const getAllProducts = async (req, res, next) =>{
    try {
        const products = await ProductsServices.getAll();
        res.json(products)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salió mal'
        })
    }
}

module.exports = {
    createProducts,
    getAllProducts
}