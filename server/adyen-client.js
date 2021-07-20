const { Client, Config, CheckoutAPI } = require("@adyen/api-library");
const dotenv = require("dotenv");

dotenv.config();

const config = new Config({
  endpoint: process.env.PAYPAL_ENDPOINT,
  apiKey: process.env.PAYPAL_API_KEY,
  merchantAccount: process.env.PAYPAL_MERCHANT_ACCOUNT
});
const client = new Client({ config });
client.setEnvironment(process.env.PAYPAL_ENVIRONMENT);
const checkout = new CheckoutAPI(client);

module.exports = checkout