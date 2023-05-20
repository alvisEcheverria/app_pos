const { Products } = require("../models");

const totalPrice = async (OrderDetails, orderId) => {
    const allProductWithPrice = await OrderDetails.findAll({
      where: { orderId },
      include: {
        model: Products,
        as: 'product'
      }
    });

  let totalPrice = 0;
  let totalTax = 0;

  allProductWithPrice.forEach(product => {
    totalPrice += product.price * product.quantity;
    const tax = product.price * product.quantity * 0.12; 
    totalTax += tax;
  });

  totalPrice += totalTax; 

  await OrderDetails.update(
      { total: totalPrice },
      { where: { orderId } }
  );
}

module.exports = totalPrice;