import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeArea } from "../../../components/safeArea";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography";
import { Spacer } from "../../../components/spacer";
import { useFocusEffect } from "@react-navigation/native";

const AvatarContainer = styled.View`
  align-items: center;
`;

const ListItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState();
  const { onLogout, user } = useContext(AuthenticationContext);
  const loadPhoto = async (user) => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhotoUri(photoUri);
  };
  useFocusEffect(() => {
    loadPhoto(user);
  });
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photoUri && <Avatar.Image source={{ uri: photoUri }} size={180} />}
          {!photoUri && <Avatar.Icon size={180} icon="human" />}
          <Spacer size="large">
            <Text variant="label" style={{ textAlign: "center" }}>
              {user.email}
            </Text>
          </Spacer>
        </TouchableOpacity>
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
