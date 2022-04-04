import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const getPositionVariant = {
  top: "margin-top",
  bottom: "margin-bottom",
  right: "margin-right",
  left: "margin-left",
};

const getSizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  return `${getPositionVariant[position]}: ${
    theme.space[getSizeVariant[size]]
  }`;
};
const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
