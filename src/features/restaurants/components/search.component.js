import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Searchbar } from "react-native-paper";
import { FlatList, Text, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const FlatListConatiner = styled(FlatList).attrs({
  contentContainerStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgb(236, 236, 236)",
    borderTopColor: "rgb(236, 236, 236)",
  },
})`
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: white;
`;

const ListItem = styled.Pressable`
  padding: 10px;
  border-bottom-width: 0.5px;
  border-color: "rgb(236, 236, 236)";
`;

export const Search = ({ isToggled, onToggle }) => {
  const { keyword, onSearch, onAutocomplete, predictions } =
    useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  const autocompletTimeout = useRef();
  useEffect(() => {
    setSearchQuery(keyword);
    if (!!autocompletTimeout.current) {
      clearTimeout(autocompletTimeout.current);
    }
  }, [keyword]);

  const autocompleteHandler = useCallback((query) => {
    if (!!autocompletTimeout.current) {
      clearTimeout(autocompletTimeout.current);
    }
    autocompletTimeout.current = setTimeout(() => {
      onAutocomplete(query);
    }, 2000);
  }, []);

  return (
    <View>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={onToggle}
        placeholder="Search for location"
        onSubmitEditing={() => {
          onSearch(searchQuery);
        }}
        onChangeText={(query) => {
          autocompleteHandler(query);
          setSearchQuery(query);
        }}
        value={searchQuery}
      />
      {!!predictions.length && (
        <FlatListConatiner
          style={styles.flatList}
          data={predictions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ListItem onPress={() => onSearch(item)}>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    position: "absolute",
    top: 50,
    width: "100%",
    backgroundColor: "white",
  },
});
