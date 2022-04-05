import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { Search } from "../components/search.component";
import { SearchBarContainer } from "./restaurants.styles";
import { ContentContainer } from "./restaurants.styles";
import { ActivityIndicatorView } from "./restaurants.styles";

export const RestaurantsScreen = () => {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);

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
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
          />
        </ContentContainer>
      )}
    </SafeArea>
  );
};
