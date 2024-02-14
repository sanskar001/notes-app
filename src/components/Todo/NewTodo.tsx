import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "@UI/Input";
import IconButton from "@UI/IconButton";
import { useTheme } from "@/context/themeContext";

interface NewTodoProps {}

const NewTodo: React.FC<NewTodoProps> = ({}) => {
  const { colors } = useTheme();
  const [todo, setTodo] = useState<string>("");

  const todoChangeHandler = (text: string) => {
    setTodo(text);
  };

  return (
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
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  reminderContainer: {
    marginTop: 16,
  },
});
