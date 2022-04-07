import React from "react";
import { Text, View, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(true);
  const [lunchExpanded, setLunchExpanded] = React.useState(true);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(true);

  const { restaurant } = route?.params;

  return (
    <SafeArea>
      <Spacer position="bottom" size="large">
        <RestaurantInfoCard restaurant={restaurant} />
      </Spacer>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs bendict" />
          <List.Item title="Classic breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger with Fries" />
          <List.Item title="Steak" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="pasta" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Burger with Fries" />
          <List.Item title="Steak" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
