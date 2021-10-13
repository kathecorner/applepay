import React, { useContext, useEffect } from "react";
import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";
import PaymentAmountContext from "../state/PaymentAmountContext";

// dummy methods
const makePayment = (adyenData, amount) => {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.assign(adyenData, { amount })), // body data type must match "Content-Type" header
  }).then((response) => response.json());
};

const submitDetails = (adyenData) => {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payment/details`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adyenData), // body data type must match "Content-Type" header
  }).then((response) => response.json());
};

const showFinalResult = (response) => {
  console.log("Payment complete! ", response);
};

const configuration = {
  locale: process.env.REACT_APP_LOCALE,
  environment: process.env.REACT_APP_APPLEPAY_ENVIRONMENT,
  clientKey: process.env.REACT_APP_APPLEPAY_CLIENT_KEY,
};

const ApplePay = () => {
  const [amount] = useContext(PaymentAmountContext);

  useEffect(() => {
    const checkout = new AdyenCheckout(configuration);
    checkout
      .create("applepay", {
        environment: process.env.REACT_APP_APPLEPAY_ENVIRONMENT,
        countryCode: process.env.REACT_APP_COUNTRY.toUpperCase(),
        configuration: {
          merchantId: process.env.REACT_APP_APPLEPAY_MERCHANT_ID,
          intent: "authorize",
        },
        onSubmit: (state, component) => {
          // Your function calling your server to make the /payments request.
          makePayment(state.data, {
            currency: process.env.REACT_APP_CURRENCY,
            value: amount,
          })
            .then((response) => {
              if (response.action) {
                // The Component handles the action object from the /payments response.
                component.handleAction(response.action);
              } else {
                // Your function to show the final result to the shopper.
                showFinalResult(response);
              }
            })
            .catch((error) => {
              throw Error(error);
            });
        },
        onCancel: (data, component) => {
          // Sets your prefered status of the component when a ApplePay payment is cancelled. In this example, return to the initial state.
          component.setStatus("ready");
        },
        onError: (error, component) => {
          // Sets your prefered status of the component when an error occurs. In this example, return to the initial state.
          component.setStatus("ready");
        },
        onAdditionalDetails: (state) => {
          // Your function to submit a state.data object to the payments/details endpoint.
          submitDetails(state.data).then((result) => {
            // Your function to show the final result to the shopper.
            showFinalResult(result);
          });
        },
      })
      .mount("#applepay-container");
  }, []);

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
