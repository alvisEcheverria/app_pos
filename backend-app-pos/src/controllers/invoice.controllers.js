const { InvoiceServices } = require('../services');
const userToken = require('../utils/dataToken');
require('dotenv').config();

const genInvoice = async (req, res, next)=>{
    try {
        const addInvoice = req.body;
        const result = await InvoiceServices.create(addInvoice);
       
        if (result.message === 'Compra Éxitosa') {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos para la factura'
        });
    }
};

const getInvoice = async (req, res, next) =>{
    try {

        const invoice = await InvoiceServices.getAllInvoice();
        res.json(invoice)
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'No se pudo obtener la orden'
        });
    }
}

const delInvoice = async (req, res, next) =>{
    try {
        const { invoiceId } = req.params;
        const result = await InvoiceServices.delete(invoiceId);
        res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'El producto no se pudo eliminar'
        });
    }
}

module.exports = {
    genInvoice,
    getInvoice,
    delInvoice,
}