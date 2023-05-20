const { Products } = require("../models");

const totalTax = async (OrderDetails, orderId) => {
  const allProductWithPrice = await OrderDetails.findAll({
    where: { orderId },
    include: {
      model: Products,
      as: 'product'
    }
  });

  let totalTax = 0;

  allProductWithPrice.forEach(product => {
    const tax = product.price * product.quantity * 0.12; 
    totalTax += tax;
  });

  await OrderDetails.update(
    { totalTax: totalTax },
    { where: { orderId: orderId } }
  );
};

module.exports = totalTax;
