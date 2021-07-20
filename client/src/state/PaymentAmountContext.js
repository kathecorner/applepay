import { createContext } from "react";

const PaymentAmountContext = createContext([1000, () => {}]);

export default PaymentAmountContext;
