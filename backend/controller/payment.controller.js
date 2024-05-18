const PayOS = require("@payos/node");
const payos = new PayOS(
  "04137e5d-0642-41c3-b3ab-3dc618697a79",
  "d7aa9d5c-1a22-4609-906b-7039f2c2e627",
  "d71efc00c44d08f37609502ea2fcdf31d63af22ce1512f3517897a56f1093849"
);

const getCheckoutUrl = async (req, res) => {
  try {
    const data = req.body;
    const { amountTotal } = data;
    const orderCode = new Date().getTime();
    const order = {
      amount: amountTotal,
      description: `Checkout order`,
      orderCode: orderCode,
      returnUrl: `${process.env.WEBAPP_URL}/payment/success`,
      cancelUrl: `${process.env.WEBAPP_URL}/payment/cancel`,
    };
    const paymentLink = await payos.createPaymentLink(order);
    res.json({ url: paymentLink.checkoutUrl });
  }
  catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = {
  getCheckoutUrl
}