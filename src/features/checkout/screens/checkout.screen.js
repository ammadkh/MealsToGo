import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/safeArea";
import { CreditCardInput } from "../components/credit-card.component";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
