const { Products, Orders, OrderDetails, Categories } = require("../models");
const subTotal = require("../utils/subTotal");
const totalTax = require("../utils/totalTax");
const totalPrice = require('../utils/totalPrice');

class OrdersServices {
    static async create (addProduct) {
        try {
            const { productId, quantity, userId, clientId, date} = addProduct;
            const findProduct = await Products.findByPk(productId);

            const existingOrder = await Orders.findOne({
                where: { clientId, userId, status: 'active' } 
            });
        
            let orderId;
        
            if (existingOrder) {
                orderId = existingOrder.orderId;
            } else {
            const newOrder = await Orders.create({ clientId, userId, date });
                orderId = newOrder.orderId;
            }

            const productInOrder = await OrderDetails.findOne({
                where: { orderId, productId }
            });

            if (!productInOrder) {
                await OrderDetails.create({
                    orderId,
                    productId,
                    quantity,
                    price: findProduct.price,
                    subtotal: 0,
                    totalTax: 0,
                    total: 0
                });
                
                await subTotal(OrderDetails, orderId);
                await totalTax(OrderDetails, orderId);
                await totalPrice(OrderDetails, orderId);

            }

            if (!productInOrder) {
                return { message: 'Se agregó el producto a la orden', orderId };
            } else {
                return { message: 'El producto ya fue agregado a la orden' };
            }
        } catch (error) {
            throw error;
        }
    }
 
    static async gettingOrder(orderId){
        const result = await OrderDetails.findAll({
            where: { orderId },
            attributes: {
                exclude: ['product_id', 'order_id', 'createdAt', 'updatedAt']
            },
            include: {
                model: Products,
                as: 'product',
                attributes: ['productId', 'categoryId', 'nameProduct', 'code', 'description', 'quantity', 'unitMeasure', 'price'],
                include: {
                    model: Categories,
                    as: 'category',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                }
            }
        });
        return result;   
    }

    static async update(orderId, newData){
        try {
            const { productId, newQuantity } = newData;

            const result = await OrderDetails.update({quantity: newQuantity}, {
                where: { productId: [productId], orderId: [orderId]}
            });

            await subTotal(OrderDetails, orderId);
            await totalTax(OrderDetails, orderId);
            await totalPrice(OrderDetails, orderId);

            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(orderId, productId){
        try {
            const result = await OrderDetails.destroy({
              where: { orderId: [orderId], productId: [productId] }
            });
        
            await totalTax(OrderDetails, orderId);
            await totalPrice(OrderDetails, orderId);
    
            return result;
        
          } catch (error) {
            throw error;
          }
    }

    static async cancelOrder(orderId){
        try {
            await OrderDetails.destroy({
                where: { orderId }
            });

            await Orders.destroy({
                where: { orderId }
            });

            return 'Orden eliminada con éxito';
        } catch (error) {
            throw error;
        }
    }
};

module.exports = OrdersServices;