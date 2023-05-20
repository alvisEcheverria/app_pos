const { Categories } = require('../models');

class CategoriesServices {
    static async create(newCategory){
        try {
            const result = await Categories.create(newCategory);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Categories.findAll({
                attributes: ['categoryId', 'categoryName']
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoriesServices;