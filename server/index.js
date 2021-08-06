const express = require("express");
const { paymentDetailsHandler, paymentHandler } = require("./handlers/payment");
require("dotenv").config();
require("./hijack")();


const app = express();
const port = 3010;

app.use(express.json());

app.post("/api/payment", paymentHandler)

app.post("/api/payment/details", paymentDetailsHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})