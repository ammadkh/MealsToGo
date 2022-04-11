import React from "react";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.style";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const AnimationWrapper = styled.View`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 40%;
`;
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          source={require("../../../../assets/watermelon.json")}
          autoPlay
          loop
          resizeMode="cover"
        />
      </AnimationWrapper>
      <Spacer position="bottom" size="large">
        <Text variant="heading">Meals To Go</Text>
      </Spacer>
      <AccountContainer>
        <AuthButton
          icon="lock"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="account-plus"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
