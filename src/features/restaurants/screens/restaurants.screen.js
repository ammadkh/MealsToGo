import React, { useContext, useState } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { FadeInAnimation } from "../../../components/animation/fade-in.animation";
import { FavouriteBar } from "../../../components/favourite/favourite-bar.compoent";

import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { Search } from "../components/search.component";
import { CardContainer, SearchBarContainer } from "./restaurants.styles";
import { ContentContainer } from "./restaurants.styles";
import { ErrorView } from "./restaurants.styles";
import { ActivityIndicatorView } from "./restaurants.styles";

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { restaurants, error, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouriteContext);
  const [isToggled, setIsToggled] = useState(false);
  const pressCardHandler = (restaurant) => {
    navigation.navigate("RestaurantDetail", { restaurant });
  };

  const toggleHandler = () => {
    setIsToggled((prevValue) => !prevValue);
  };

  const hasError = error || locationError;
  return (
    <SafeArea>
      <SearchBarContainer>
        <Search onToggle={toggleHandler} isToggled={isToggled} />
      </SearchBarContainer>
      {isToggled && (
        <FavouriteBar favourites={favourites} onPress={pressCardHandler} />
      )}
      {hasError && (
        <ErrorView>
          <Text variant="error">Something went wrong while fetching data.</Text>
        </ErrorView>
      )}
      {isLoading && (
        <ActivityIndicatorView>
          <ActivityIndicator animating={true} color="red" size={50} />
        </ActivityIndicatorView>
      )}
      {!hasError && !isLoading && (
        <ContentContainer>
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <FadeInAnimation duration={3000}>
                <Spacer position="bottom" size="large">
                  <CardContainer>
                    <RestaurantInfoCard
                      restaurant={item}
                      onPress={() => pressCardHandler(item)}
                    />
                  </CardContainer>
                </Spacer>
              </FadeInAnimation>
            )}
          />
        </ContentContainer>
      )}
    </SafeArea>
  );
};
