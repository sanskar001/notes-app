import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Theme } from "@react-navigation/native";

export const setTabNavigatorOptions = ({
  colors,
}: Theme): BottomTabNavigationOptions => {
  return {
    headerTitle: "",
    headerStyle: {
      elevation: 0,
      shadowColor: "transparent",
      backgroundColor: colors.background,
      borderBottomColor: "transparent",
    },
    tabBarStyle: {
      height: 55,
      paddingVertical: 4,
      borderTopColor: colors.border,
      backgroundColor: colors.primary,
    },
    tabBarLabelStyle: {
      fontSize: 10,
      fontFamily: "Inter_500",
      color: colors.text,
    },
  };
};
