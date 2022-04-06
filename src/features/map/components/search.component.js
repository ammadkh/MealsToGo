import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, onSearch } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <Searchbar
      placeholder="Search for location"
      onSubmitEditing={() => onSearch(searchQuery)}
      onChangeText={(query) => setSearchQuery(query)}
      value={searchQuery}
    />
  );
};
