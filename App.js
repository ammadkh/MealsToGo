import React from "react";
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import AppLoading from "expo-app-loading";
import { initializeApp } from "firebase/app";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB390xwFSoqdyM_cbeKQW2TM26dtOfjD7M",
    authDomain: "meal-to-go-e45ad.firebaseapp.com",
    projectId: "meal-to-go-e45ad",
    storageBucket: "meal-to-go-e45ad.appspot.com",
    messagingSenderId: "925038462214",
    appId: "1:925038462214:web:9e44fd6842569858b90a87",
  };

  initializeApp(firebaseConfig);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <Navigation />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
