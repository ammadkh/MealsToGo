import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { Search } from "../components/search.component";
import { CardContainer, SearchBarContainer } from "./restaurants.styles";
import { ContentContainer } from "./restaurants.styles";
import { ActivityIndicatorView } from "./restaurants.styles";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);

  const pressCardHandler = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  return (
    <SafeArea>
      <SearchBarContainer>
        <Search />
      </SearchBarContainer>
      {isLoading && (
        <ActivityIndicatorView>
          <ActivityIndicator animating={true} color="red" size={50} />
        </ActivityIndicatorView>
      )}
      {!isLoading && (
        <ContentContainer>
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <CardContainer>
                  <RestaurantInfoCard
                    restaurant={item}
                    onPress={() => pressCardHandler(item)}
                  />
                </CardContainer>
              </Spacer>
            )}
          />
        </ContentContainer>
      )}
    </SafeArea>
  );
};
