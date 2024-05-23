const PayOS = require("@payos/node");
const payos = new PayOS(
  "04137e5d-0642-41c3-b3ab-3dc618697a79",
  "d7aa9d5c-1a22-4609-906b-7039f2c2e627",
  "d71efc00c44d08f37609502ea2fcdf31d63af22ce1512f3517897a56f1093849"
);
const nodemailer = require("nodemailer");

const getCheckoutUrl = async (req, res) => {
  try {
    const data = req.body;
    const { amountTotal } = data;
    const orderCode = new Date().getTime();
    const order = {
      amount: amountTotal,
      description: `Checkout order`,
      orderCode: orderCode,
      returnUrl: `${
        process.env.WEBAPP_URL
      }/payment/success?&address=${encodeURIComponent(
        data.address
      )}&phone=${encodeURIComponent(data.phone)}&amount=${encodeURIComponent(
        data.amountTotal
      )}`,
      // cancelUrl: `${process.env.WEBAPP_URL}/payment/cancel`,
      cancelUrl: `${
        process.env.WEBAPP_URL
      }/payment/success?&address=${encodeURIComponent(
        data.address
      )}&email=${encodeURIComponent(data.email)}&phone=${encodeURIComponent(
        data.phone
      )}&amount=${encodeURIComponent(data.amountTotal)}`,
    };
    const paymentLink = await payos.createPaymentLink(order);
    res.json({ url: paymentLink.checkoutUrl });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const sendEmailNotify = async (req, res) => {
  try {
    let email = "trinhltnde160563@fpt.edu.vn";
    // console.log(data);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "aromaticbag.business@gmail.com",
        pass: "aealugohwduwzwad",
      },
    });

    const info = await transporter.sendMail({
      from: '"Your order has been successfully placed" <aromaticbag.business@gmail.com>', // sender address
      to: "trinhltnde160563@fpt.edu.vn", // list of receivers
      subject: "Order Confirmation", // Subject line
      text: "Your order has been placed successfully.", // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">

          <h2 style="color: #4CAF50; text-align: center;">Order Confirmation</h2>
          <p style="font-size: 16px; color: #333;">Dear Mr/Mrs,</p>
          <p style="font-size: 16px; color: #333;">Thank you for your order! We are pleased to inform you that your order has been successfully placed.</p>
          <p style="font-size: 16px; color: #333;">
            We will notify you once your order is shipped. You can find the details of your order below:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 2px solid #ddd; background-color: #f2f2f2;">Product</th>
                <th style="text-align: right; padding: 12px; border-bottom: 2px solid #ddd; background-color: #f2f2f2;">Price</th>
              </tr>
            </thead>
            <tbody>
              <!-- Example product row, you can loop through your products here -->
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">Aromatic Bag</td>
                <td style="text-align: right; padding: 12px; border-bottom: 1px solid #ddd;">$20.00</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size: 16px; color: #333;">If you have any questions, feel free to contact our support team.</p>
          <p style="font-size: 16px; color: #333;">Thank you for shopping with us!</p>
          <p style="font-size: 16px; color: #333;">Best regards,<br>Aromatic Bag Team</p>
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0; margin-top: 20px;">
            <p style="font-size: 14px; color: #999;">Aromatic Bag, FPT Urban Area, Ngu Hanh Son, Da Nang </p>
            <p style="font-size: 14px; color: #999;">Email: aromaticbag.business@gmail.com | Phone: 0336951009</p>
          </div>
        </div>
      `, // html body
    });

    return res.json({ info: info });
  } catch (error) {
    res.json({ error: error.message });
  }
};
module.exports = {
  getCheckoutUrl,
  sendEmailNotify,
};
