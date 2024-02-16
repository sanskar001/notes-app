import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import AddButtton from "@UI/AddButtton";
import NewTodo, { Todo } from "@Todo/NewTodo";
import { useTheme } from "@/context/themeContext";
import CustomTimePicker from "@UI/CustomTimePicker";

const TodoScreen: React.FC = () => {
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      return closeModalHandler;
    }, [])
  );

  function closeModalHandler() {
    setShowModal(false);
  }

  function openModalHandler() {
    setShowModal(true);
  }

  function todoAddHandler(newTodo: Todo) {
    console.log("Todo", newTodo);
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>To-dos</Text>
      {showModal && (
        <NewTodo onClose={closeModalHandler} onSubmit={todoAddHandler} />
      )}
      <View style={{ marginTop: 20 }}>
        <CustomTimePicker />
      </View>
      <AddButtton onPress={openModalHandler} />
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
