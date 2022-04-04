import React, { useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SearchBarContainer } from "./restaurants.styles";
import { ContentContainer } from "./restaurants.styles";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
      </SearchBarContainer>
      <ContentContainer>
        <FlatList
          data={[
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "5" },
            { name: "6" },
          ]}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
        />
      </ContentContainer>
    </SafeArea>
  );
};
