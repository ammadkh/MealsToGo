import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouriteContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouriteContext);

  const isFavourite = favourites.find(
    (item) => item.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() => {
        isFavourite ? removeFavourite(restaurant) : addFavourite(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
