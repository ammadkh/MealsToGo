import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouriteProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingNavigation } from "./settings.navigation";
import {
  Checkout,
  CheckoutScreen,
} from "../../features/checkout/screens/checkout.screen";

const TABS_ICONS = {
  Restaurants: "restaurant",
  Map: "map",
  Checkout: "cart",
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

const Tab = createBottomTabNavigator();
export const AppNavigation = () => {
  return (
    <FavouriteProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Checkout" component={CheckoutScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingNavigation} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteProvider>
  );
};
