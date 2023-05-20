const { Products } = require('../models');

class ProductsServices {
    static async create(newProduct){
        try {
            const result = await Products.create(newProduct);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Products.findAll({
                attributes: ['productId', 'categoryId', 'nameProduct', 'code', 'description', 'quantity', 'unitMeasure', 'price']
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductsServices;