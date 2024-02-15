import React from "react";
import { useTheme } from "@/context/themeContext";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { StyleSheet, KeyboardTypeOptions, TextInput } from "react-native";

interface InputProps {
  value: string;
  type?: KeyboardTypeOptions;
  placeholder: string;
  onChange?: ((text: string) => void) | undefined;
  autoFocus?: boolean;
}

type Ref = any;

const Input = React.forwardRef<Ref, InputProps>(
  (
    { type = "default", value, placeholder, onChange, autoFocus = true },
    ref
  ) => {
    const { colors } = useTheme();

    return (
      <BottomSheetTextInput
        ref={ref}
        keyboardType={type}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        autoFocus={autoFocus}
        style={[
          styles.input,
          { backgroundColor: colors.inputBackground, color: colors.text },
        ]}
        placeholderTextColor={colors.placeholderText}
        cursorColor={colors.notification}
      />
    );
  }
);

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 60,
    fontSize: 16,
    padding: 16,
    borderRadius: 16,
    fontFamily: "Inter_400",
  },
});
