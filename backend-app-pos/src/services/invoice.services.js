const { Products, Orders, OrderDetails, Invoice, Clients, Users, Roles } = require("../models");
const subTotal = require("../utils/subTotal");
const totalTax = require("../utils/totalTax");
const totalPrice = require('../utils/totalPrice');

class InvoiceServices {
    static async create (addInvoice) {
        try {
            const { emissionPoint, orderId } = addInvoice;

            const invoiceInfo = await OrderDetails.findOne({
                where: { orderId }
            });

            const invoiceDate = await Orders.findOne({
                where: { orderId }
            });

            const result = await Invoice.create({
                orderId ,
                establishment: 'sucursal La Paz',
                emissionPoint,
                subtotal: invoiceInfo.subtotal,
                totalTax: invoiceInfo.totalTax,
                total: invoiceInfo.total,
                date: invoiceDate.date
            });

            await Orders.update({status: 'purchased'}, {
                where: { orderId }
            });

            if(result){
                return { message: 'Compra Éxitosa', result};
            }
            else{
                return { message: 'No se pudo generar la compra'};
            }

            

        } catch (error) {
            throw error;
        }
    }
 
    static async getAllInvoice(){
        const result = await Invoice.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'order_id']
            },
            include: [
                {
                    model: Orders,
                    as: 'order',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'user_id', 'client_id']
                    },
                    include: [
                        {
                            model: OrderDetails,
                            as: 'order_details',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'order_id', 'product_id']
                            },
                            include: [
                                {
                                    model: Products,
                                    as: 'product',
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt', 'category_id']
                                    }
                                }
                            ]
                        },
                        {
                            model: Clients,
                            as: 'client',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: Users,
                            as: 'user',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'password', 'role_id']
                            },
                            include: [
                                {
                                    model: Roles,
                                    as: 'role',
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    
        return result;  
    }

    static async delete(invoiceId){
        try {
            const findOrderId = await Invoice.findByPk(invoiceId);

            await OrderDetails.destroy({
                where: { orderId: findOrderId.orderId }
            });

            await Orders.destroy({
                where: { orderId: findOrderId.orderId }
            });

            await Invoice.destroy({
              where: { invoiceId }
            });
    
            return "Factura eliminada con éxito";
        
          } catch (error) {
            throw error;
          }
    }
};

module.exports = InvoiceServices;