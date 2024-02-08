import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../UI/Input";
import { useTheme } from "@/context/themeContext";

interface NewTodoProps {}

const NewTodo: React.FC<NewTodoProps> = ({}) => {
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
    </View>
  );
};

export default NewTodo;

const styles = StyleSheet.create({});
