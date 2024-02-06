import { colors } from "@/constant/colors";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  GestureResponderEvent,
  Pressable,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type onPressCallback = ((event: GestureResponderEvent) => void) | undefined;

interface AddButttonProps {
  onPress?: onPressCallback;
}

const AddButtton: React.FC<AddButttonProps> = ({ onPress }) => {
  const scale = new Animated.Value(0);

  useFocusEffect(
    useCallback(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        delay: 150,
        useNativeDriver: true,
      }).start();

      return () => {
        scale.setValue(0);
      };
    }, [])
  );

  const pressInHandler = () => {
    Animated.timing(scale, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const pressOutHandler = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
      <Pressable
        style={styles.buttonContent}
        onPress={onPress}
        onPressIn={pressInHandler}
        onPressOut={pressOutHandler}
      >
        <Icon name="add" size={32} color={colors.white} />
      </Pressable>
    </Animated.View>
  );
};

export default AddButtton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 24,
    right: 24,
    elevation: 4,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    borderRadius: 50,
    transform: [{ scale: 1 }],
  },
  buttonContent: {
    width: 64,
    height: 64,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
});
