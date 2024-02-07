import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../UI/Input";
import { useTheme } from "@/context/themeContext";

interface NewTodoProps {}

const NewTodo: React.FC<NewTodoProps> = ({}) => {
  const { colors } = useTheme();
  const [todo, setTodo] = useState<string>("");

  const todoChangeHandler = (text: string) => {
    setTodo(text);
  };

  return (
    <View style={{ padding: 16, backgroundColor: colors.border }}>
      <Input placeholder="New Todo" value={todo} onChange={todoChangeHandler} />
    </View>
  );
};

export default NewTodo;

const styles = StyleSheet.create({});
