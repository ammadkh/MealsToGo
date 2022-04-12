import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const ContentContainer = styled.View`
  z-index: -1;
`;

export const FlatlistContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
});

export const ActivityIndicatorView = styled.View`
  height: 80%;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.View`
  margin-right: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[3]};
`;
