import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "@UI/Input";
import IconButton from "@UI/IconButton";
import { useTheme } from "@/context/themeContext";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";

interface NewTodoProps {
  onClose: () => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onClose }) => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [todo, setTodo] = useState<string>("");

  const todoChangeHandler = (text: string) => {
    setTodo(text);
  };

  const dismissModalHandler = () => {
    bottomSheetModalRef.current?.dismiss();
    onClose();
  };

  useEffect(() => {
    bottomSheetModalRef.current?.present();

    return dismissModalHandler;
  }, []);

  return (
    <CustomBottomSheetModal
      snapPoint={"25%"}
      title="New To-Do"
      ref={bottomSheetModalRef}
      dismissModal={dismissModalHandler}
      onDismiss={dismissModalHandler}
    >
      <View>
        <Input
          placeholder="New to-do"
          value={todo}
          onChange={todoChangeHandler}
        />
        <View style={styles.reminderContainer}>
          <IconButton
            name="notifications-outline"
            size={20}
            color={colors.text}
          />
        </View>
      </View>
    </CustomBottomSheetModal>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  reminderContainer: {
    marginTop: 16,
  },
});
