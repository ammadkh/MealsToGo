import React from "react";
import { Text } from "react-native";
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/safeArea";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const TABS_ICONS = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TABS_ICONS[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};
function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function MapScreen() {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
