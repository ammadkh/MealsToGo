import React from "react";
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
