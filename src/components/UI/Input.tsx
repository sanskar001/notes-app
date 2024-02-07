import React from "react";
import { useTheme } from "@/context/themeContext";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { StyleSheet, KeyboardTypeOptions } from "react-native";

interface InputProps {
  value: string;
  type?: KeyboardTypeOptions;
  placeholder: string;
  onChange?: ((text: string) => void) | undefined;
}

const Input: React.FC<InputProps> = ({
  type = "default",
  value,
  placeholder,
  onChange,
}) => {
  const { colors } = useTheme();

  return (
    <BottomSheetTextInput
      keyboardType={type}
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      style={[styles.input, { backgroundColor: colors.primary }]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    // backgroundColor:
  },
});
