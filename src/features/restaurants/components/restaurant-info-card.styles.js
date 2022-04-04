import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const CardContainer = styled(Card)`
  margin-right: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const SvgContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const EndSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconImg = styled.Image`
  width: 20px;
  height: 20px;
`;
