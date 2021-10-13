import React from "react";
import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";
// import PaymentAmountContext from "../state/PaymentAmountContext";

// dummy methods
// const makePayment = (adyenData, amount) => {
//   return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payment`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(Object.assign(adyenData, { amount })), // body data type must match "Content-Type" header
//   }).then((response) => response.json());
// };
//
// const submitDetails = (adyenData) => {
//   return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payment/details`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(adyenData), // body data type must match "Content-Type" header
//   }).then((response) => response.json());
// };

// const showFinalResult = (response) => {
//   console.log("Payment complete! ", response);
// };

const configuration = {
  locale: process.env.REACT_APP_LOCALE,
  environment: process.env.REACT_APP_APPLEPAY_ENVIRONMENT,
  clientKey: process.env.REACT_APP_APPLEPAY_CLIENT_KEY,
};

const ApplePay = () => {
  // const [amount] = useContext(PaymentAmountContext);
  const applePayConfiguration = {
    amount: {
      value: 1000,
      currency: "EUR",
    },
    countryCode: "DE",
  };
  const checkout = new AdyenCheckout(configuration);
  const applePayComponent = checkout.create("applepay", applePayConfiguration);
  applePayComponent
    .isAvailable()
    .then(() => {
      applePayComponent.mount("#applepay-container");
    })
    .catch((e) => {
      console.log("TCL ERROR ->", e);
    });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div id="applepay-container" />
    </div>
  );
};

export default ApplePay;
