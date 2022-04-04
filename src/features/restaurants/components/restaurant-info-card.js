import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Spice Bazaar",
    icon,
    photos = ["https://visitlahore.com/wp-content/uploads/2019/09/2-8.jpg"],
    address = "Gulberg 2",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
