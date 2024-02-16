import React from "react";
import { useTheme } from "@/context/themeContext";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconButton from "./IconButton";
import Icon from "react-native-vector-icons/Ionicons";

interface ChipProps {
  label: string;
  onPress?: () => void;
  onCancel?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onPress, onCancel }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.chip, { backgroundColor: colors.inputBackground }]}>
      <Pressable style={styles.labelButton} onPress={onPress}>
        <Icon
          name="notifications-outline"
          color={colors.notification}
          size={16}
        />
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      </Pressable>
      <IconButton
        name="close-outline"
        color={colors.text}
        size={20}
        onPress={onCancel}
      />
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    maxWidth: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  labelButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter_400",
  },
});
