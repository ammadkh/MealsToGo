import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const SafeView = styled.SafeAreaView`
  ${({ statusBar }) =>
    statusBar.currentHeight && `margin-top: ${statusBar.currentHeight}px;`}
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

export const SafeArea = (props) => {
  return <SafeView statusBar={StatusBar}>{props.children}</SafeView>;
};
