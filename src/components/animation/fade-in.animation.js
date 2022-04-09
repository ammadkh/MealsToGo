import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeInAnimation = ({ children, duration = 10000 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = (duration) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn(duration);
  }, [duration]);
  return (
    <Animated.View
      style={[
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
