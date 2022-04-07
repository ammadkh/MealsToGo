import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer";
import { Text } from "../typography";

const FavouriteWrapper = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const FavouriteBar = ({ favourites, onPress }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((fav) => (
          <Spacer position="left" size="medium" key={fav.name}>
            <TouchableOpacity onPress={() => onPress(fav)}>
              <CompactRestaurantInfo restaurant={fav} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouriteWrapper>
  );
};
