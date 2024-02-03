import React, { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import AddButtton from "@UI/AddButtton";

const TodoScreen: React.FC = () => {
  const { colors } = useTheme();

  const pressHandler = () => {
    console.log("Clicked on Todos");
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>To-dos</Text>
      <AddButtton onPress={pressHandler} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    position: "relative",
  },
  title: {
    fontSize: 36,
    fontFamily: "Inter_500",
  },
});
