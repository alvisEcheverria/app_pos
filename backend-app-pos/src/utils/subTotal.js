const { Products } = require("../models");

const subTotal = async (OrderDetails, orderId) => {
  const allProductWithPrice = await OrderDetails.findAll({
    where: { orderId },
    include: {
      model: Products,
      as: 'product'
    }
  });

  let subtotal = 0;

  allProductWithPrice.forEach(product => {
    subtotal += product.price * product.quantity;
  }); 

  await OrderDetails.update(
      { subtotal },
      { where: { orderId } }
  );
};

module.exports = subTotal;