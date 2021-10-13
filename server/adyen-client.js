const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const config = {
  apiKey: process.env.APPLEPAY_API_KEY,
  checkoutEndpoint: process.env.APPLEPAY_ENDPOINT,
  environment: process.env.APPLEPAY_ENVIRONMENT
};

const client = axios.create({
  baseURL: config.checkoutEndpoint,
  headers: {
    "X-API-Key": config.apiKey
  }
});

module.exports = {
  payments: (body) => client.post(config.checkoutEndpoint, body).then(response => response.data),
  paymentsDetails: (body) => client.post(`${config.checkoutEndpoint}/details`, body).then(response => response.data)
};
