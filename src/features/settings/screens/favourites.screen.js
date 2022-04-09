import React, { useContext } from "react";
import { FlatList } from "react-native";
import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";
import { CardContainer } from "../../restaurants/screens/restaurants.styles";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <SafeArea>
      <Spacer position="top" size="large">
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <CardContainer>
                <RestaurantInfoCard
                  restaurant={item}
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                />
              </CardContainer>
            </Spacer>
          )}
        />
      </Spacer>
    </SafeArea>
  );
};
