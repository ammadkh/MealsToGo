import React, { useContext } from "react";
import { AppNavigation } from "./app.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigation } from "./account.navigation";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigation />}
    </NavigationContainer>
  );
};
