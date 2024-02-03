import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

const TodoScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>To-dos</Text>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontFamily: "Inter_500",
  },
});
