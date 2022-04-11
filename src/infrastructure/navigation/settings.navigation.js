import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingStack = createNativeStackNavigator();
export const SettingNavigation = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingStack.Screen name="Camera" component={CameraScreen} />
    </SettingStack.Navigator>
  );
};
