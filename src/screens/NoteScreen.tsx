import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import AddButtton from "@/components/UI/AddButtton";

const NoteScreen: React.FC = () => {
  const { colors } = useTheme();

  const pressHandler = () => {
    console.log("Clicked on Notes");
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>All notes</Text>
      <AddButtton onPress={pressHandler} />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 42,
    fontFamily: "Inter_500",
  },
});
