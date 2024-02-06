import React, { useMemo } from "react";
import { StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { IconProps } from "react-native-vector-icons/Icon";
import { colors } from "@/constant/colors";

interface IconButtonProps extends IconProps {
  onPress?: () => void;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  color,
  size = 24,
  onPress,
  disabled,
}) => {
  const buttonStyle = useMemo(
    () => [styles.button, disabled ? styles.disabled : null],
    [disabled]
  );

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed && !disabled ? [...buttonStyle, styles.pressed] : buttonStyle
      }
    >
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.3,
  },
  pressed: {
    backgroundColor: colors.cloudGray,
  },
});
