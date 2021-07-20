import React, { useState } from "react";
import Routes from "./routes";
import PaymentAmountContext from "./state/PaymentAmountContext";

const App = () => {
  const paymentAmountState = useState(1000);

  return (
    <div className="App">
      <PaymentAmountContext.Provider value={paymentAmountState}>
        <Routes />
      </PaymentAmountContext.Provider>
    </div>
  );
};

export default App;
