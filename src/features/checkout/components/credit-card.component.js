import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

export const CreditCardInput = () => {
  const changeHandler = (event) => {
    const { values, status } = event;
    const isIncomplete = Object.values3(status).includes("incomplete");
    console.log(event, "ee");
  };
  return <LiteCreditCardInput onChange={changeHandler} />;
};
