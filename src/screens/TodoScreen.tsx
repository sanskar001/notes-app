import React, { useCallback, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import AddButtton from "@UI/AddButtton";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import NewTodo from "@components/Todo/NewTodo";
import { useTheme } from "@/context/themeContext";

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

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>To-dos</Text>
      {showModal && <NewTodo onClose={closeModalHandler} />}
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
