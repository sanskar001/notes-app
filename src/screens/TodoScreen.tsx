import React, { useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import AddButtton from "@UI/AddButtton";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import NewTodo from "@components/Todo/NewTodo";
import { useTheme } from "@/context/themeContext";

const TodoScreen: React.FC = () => {
  const { colors } = useTheme();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openModalHandler = () => {
    bottomSheetModalRef.current?.present();
  };

  const dismissModalHandler = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        bottomSheetModalRef.current?.dismiss();
      };
    }, [])
  );

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>To-dos</Text>
      <CustomBottomSheetModal
        snapPoint={"25%"}
        ref={bottomSheetModalRef}
        title="New To-Do"
        dismissModal={dismissModalHandler}
      >
        <NewTodo />
      </CustomBottomSheetModal>
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
