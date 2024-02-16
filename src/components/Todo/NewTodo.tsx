import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@/context/themeContext";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Chip from "@UI/Chip";
import Input from "@UI/Input";
import IconButton from "@UI/IconButton";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import TodoReminder, { Datetime } from "./TodoReminder";
import {
  getDatetimeString,
  getFormattedDatetime,
} from "@/utils/getFormattedDatetime";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
  reminderTime: Date | null;
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
  const [reminder, setReminder] = useState<Datetime | null>(null);
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
      reminderTime: reminder && new Date(getDatetimeString(reminder)),
    };

    onSubmit(newTodo);
  };

  const closeModalHandler = () => {
    setShowReminderModal(false);
    inputRef.current?.focus();
  };

  const openModalHandler = () => {
    setShowReminderModal(true);
    inputRef.current?.blur();
  };

  const addReminderHandler = (reminder: Datetime) => {
    setReminder(reminder);
  };

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
          {!reminder ? (
            <IconButton
              name="notifications-outline"
              size={20}
              color={colors.text}
              onPress={openModalHandler}
            />
          ) : (
            <Chip
              label={getFormattedDatetime(reminder)}
              onPress={openModalHandler}
              onCancel={setReminder.bind(null, null)}
            />
          )}
          {showReminderModal && (
            <TodoReminder
              selectedReminder={reminder}
              onClose={closeModalHandler}
              onAddReminder={addReminderHandler}
            />
          )}
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
