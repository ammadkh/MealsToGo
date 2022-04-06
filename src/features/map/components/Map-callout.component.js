import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography";

const ImgContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
`;
const CalloutContainer = styled.View`
  width: 120px;
  height: 120px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ImgView = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const MapCallout = ({ restaurant }) => {
  return (
    <CalloutContainer>
      <ImgContainer>
        <ImgView source={{ uri: restaurant.photos[0] }} />
      </ImgContainer>
      <Text variant="label">{restaurant.name}</Text>
    </CalloutContainer>
  );
};
