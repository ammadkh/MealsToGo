import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/Map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const SearchContainer = styled.View`
  position: absolute;
  padding: ${(props) => props.theme.space[3]};
  top: 40px;
  width: 100%;
  z-index: 10;
`;

export const MapScreen = ({ navigation }) => {
  const [latitudeDelta, setLatitudeDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const { viewport } = location;

  useEffect(() => {
    const northeastlat = viewport.northeast.lat;
    const southwestlat = viewport.southwest.lat;
    setLatitudeDelta(northeastlat - southwestlat);
  }, [location, viewport]);
  return (
    <>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latitudeDelta,
          longitudeDelta: 0.0221,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            name={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </>
  );
};
