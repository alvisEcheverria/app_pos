const { OrdersServices } = require('../services');
const userToken = require('../utils/dataToken');
require('dotenv').config();

const addProductToOrder = async (req, res, next)=>{
    try {
        const addProduct = req.body;
        const bearerToken = req.headers.authorization;
        const result = await OrdersServices.create(({...addProduct, userId: userToken(bearerToken).userId}));
       
        if (result.message !== 'El producto ya fue agregado a la orden') {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'El producto no existe o faltan datos'
        });
    }
};

const getOrder = async (req, res, next) =>{
    try {
        const orderId = req.params.orderId; 

        const result = await OrdersServices.gettingOrder(orderId);
        res.json(result)
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'No se pudo obtener la orden'
        });
    }
}

const updateOrder = async (req, res, next) =>{
    try {
        const newData = req.body;
        const { orderId } = req.params;;
        const result = await OrdersServices.update(orderId, newData)
        res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'El producto no existe o faltan datos'
        });
    }
}

const delProductInOrder = async (req, res, next) =>{
    try {
        const { orderId, productId } = req.params;
        const result = await OrdersServices.delete(orderId, productId);
        res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'El producto no se pudo eliminar'
        });
    }
}

const cancelAnOrder = async (req, res, next) =>{
    try {
        const { orderId } = req.params;
        const result = await OrdersServices.cancelOrder(orderId);
        res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'No se pudo eliminar la orden'
        });
    }
}

module.exports = {
    addProductToOrder,
    getOrder,
    updateOrder,
    delProductInOrder,
    cancelAnOrder
}