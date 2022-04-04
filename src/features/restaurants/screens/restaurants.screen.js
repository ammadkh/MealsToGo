import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card";

const SafeView = styled.SafeAreaView`
  flex: 1;
`;
const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeView>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
      </SearchBarContainer>
      <ContentContainer>
        <RestaurantInfoCard />
      </ContentContainer>
    </SafeView>
  );
};
