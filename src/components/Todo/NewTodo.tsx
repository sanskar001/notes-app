import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "@UI/Input";
import IconButton from "@UI/IconButton";
import { useTheme } from "@/context/themeContext";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import TodoReminder from "./TodoReminder";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
  reminderTime?: number | string;
}

interface NewTodoProps {
  onClose: () => void;
  onSubmit: (newTodo: Todo) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onClose, onSubmit }) => {
  const { colors } = useTheme();
  const inputRef = useRef<any>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [todo, setTodo] = useState<string>("");
  const [showReminderModal, setShowReminderModal] = useState<boolean>(false);

  useEffect(() => {
    bottomSheetModalRef.current?.present();

    return dismissModalHandler;
  }, []);

  const todoChangeHandler = (text: string) => {
    setTodo(text);
  };

  const dismissModalHandler = () => {
    bottomSheetModalRef.current?.dismiss();
    onClose();
  };

  const todoSubmitHandler = () => {
    const newTodo: Todo = {
      id: "todo_" + new Date().getTime(),
      text: todo,
      isDone: false,
    };

    onSubmit(newTodo);
  };

  function closeModalHandler() {
    setShowReminderModal(false);
    inputRef.current?.focus();
  }

  function openModalHandler() {
    setShowReminderModal(true);
    inputRef.current?.blur();
  }

  return (
    <CustomBottomSheetModal
      snapPoint={220}
      title="New To-Do"
      ref={bottomSheetModalRef}
      disabledSubmitButton={!todo.length}
      dismissModal={dismissModalHandler}
      onDismiss={dismissModalHandler}
      onSubmit={todoSubmitHandler}
    >
      <View>
        <Input
          ref={inputRef}
          placeholder="New to-do"
          value={todo}
          onChange={todoChangeHandler}
        />
        <View style={styles.reminderContainer}>
          <IconButton
            name="notifications-outline"
            size={20}
            color={colors.text}
            onPress={openModalHandler}
          />
          {showReminderModal && <TodoReminder onClose={closeModalHandler} />}
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
