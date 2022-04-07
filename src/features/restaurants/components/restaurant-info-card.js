import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";
import {
  CardContainer,
  RestaurantCardCover,
} from "./restaurant-info-card.styles";
import { Info } from "./restaurant-info-card.styles";
import { SvgContainer } from "./restaurant-info-card.styles";
import { Rating } from "./restaurant-info-card.styles";
import { EndSection } from "./restaurant-info-card.styles";
import { IconImg } from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourite/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {}, onPress }) => {
  const {
    name = "Spice Bazaar",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://visitlahore.com/wp-content/uploads/2019/09/2-8.jpg"],
    address = "Gulberg 2",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const totalStars = Array.from(new Array(Math.floor(rating)));
  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Favourite restaurant={restaurant} />
        <Info>
          <Text variant="label">{name}</Text>
          <SvgContainer>
            <Rating>
              {totalStars.map((value, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <EndSection>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <IconImg source={{ uri: icon }} />
              </Spacer>
            </EndSection>
          </SvgContainer>
          <Text variant="caption">{address}</Text>
        </Info>
      </CardContainer>
    </TouchableOpacity>
  );
};
