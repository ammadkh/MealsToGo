import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraCtnr = styled(Camera)`
  flex: 1;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo, "photo");
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={snap} style={styles.container}>
        <CameraCtnr
          ref={(camera) => (cameraRef.current = camera)}
          type={type}
          ratio={"16:9"}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </CameraCtnr>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
