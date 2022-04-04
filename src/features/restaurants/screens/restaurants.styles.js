import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const ContentContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[13]};
`;

export const FlatlistContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
});
