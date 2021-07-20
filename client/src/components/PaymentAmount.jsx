import React, { useContext } from "react";
import PaymentAmountContext from "../state/PaymentAmountContext";
import { Link } from "react-router-dom";

const PaymentAmount = () => {
  const [amount, setAmount] = useContext(PaymentAmountContext);

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
      <div style={{ width: "300px", margin: "10px" }}>
        <input
          style={{ width: "100%", fontSize: "24px" }}
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
      </div>
      <div style={{ width: "300px", margin: "10px" }}>
        <button style={{ width: "100%", fontSize: "24px" }} type="button">
          <Link to="/payment">Submit</Link>
        </button>
      </div>
    </div>
  );
};

export default PaymentAmount;
