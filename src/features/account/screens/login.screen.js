import React, { useState, useContext } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthTextInput,
} from "../components/account.style";
import { Spacer } from "../../../components/spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <AccountBackground>
      <AccountCover />
      <Spacer position="bottom" size="large">
        <Text variant="heading">Meals To Go</Text>
      </Spacer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <AccountContainer>
          <AuthTextInput
            label="Email"
            mode="flat"
            value={email}
            autoComplete="none"
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
          />
          <Spacer size="large">
            <AuthTextInput
              label="Password"
              mode="flat"
              value={password}
              autoCapitalize="none"
              textContentType="password"
              password={true}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </Spacer>
          {error && (
            <Spacer size="large">
              <Text variant="error" style={{ textAlign: "center" }}>
                {error.toString()}
              </Text>
            </Spacer>
          )}
          <Spacer size="large">
            {isLoading ? (
              <ActivityIndicator color="red" animating={true} />
            ) : (
              <AuthButton
                icon="lock"
                mode="contained"
                onPress={() => {
                  onLogin(email, password);
                }}
              >
                Login
              </AuthButton>
            )}
          </Spacer>
        </AccountContainer>
      </KeyboardAvoidingView>
      <Spacer size="large">
        <AuthButton
          icon="arrow-left"
          mode="contained"
          onPress={() => {
            navigation.goBack();
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
