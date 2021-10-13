const checkout = require("../adyen-client");

const paymentHandler = async (req, res) => {
  const adyenResponse = await checkout.payments({
    amount: {
      currency: "USD",
      value: "1000"
    },
    paymentMethod: req.body.paymentMethod,
    reference: "TEST_2",
    merchantAccount: process.env.APPLEPAY_MERCHANT_ACCOUNT
  }).catch(error => console.log("Error while sending request to Adyen: ", error));

  return res.json(adyenResponse);
}

const paymentDetailsHandler = async (req, res) => {
  const adyenResponse = await checkout.paymentsDetails(req.body)
    .catch(error => console.log("Error while sending request to Adyen: ", error));

  res.json(adyenResponse);
}

module.exports = {
  paymentHandler,
  paymentDetailsHandler
}
