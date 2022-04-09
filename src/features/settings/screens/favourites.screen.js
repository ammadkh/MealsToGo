import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card";
import { CardContainer } from "../../restaurants/screens/restaurants.styles";

const NoFavScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <SafeArea>
      {favourites.length ? (
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
      ) : (
        <NoFavScreen
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text variant="label">No favourite selected yet.</Text>
        </NoFavScreen>
      )}
    </SafeArea>
  );
};
