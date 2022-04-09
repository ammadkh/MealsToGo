import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/safeArea";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography";
import { Spacer } from "../../../components/spacer";

const AvatarContainer = styled.View`
  align-items: center;
`;

const ListItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" />
        <Spacer size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <Spacer variant="large">
        <ListItem
          title="Favourites"
          onPress={() => navigation.navigate("Favourites")}
          description="View your favourites restaurants"
          left={(props) => <List.Icon {...props} icon="heart" />}
        />
        <ListItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} icon="logout" />}
        />
      </Spacer>
    </SafeArea>
  );
};
