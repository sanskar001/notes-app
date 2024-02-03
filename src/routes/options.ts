import { Theme } from "@react-navigation/native";

export const setTabNavigatorOptions = ({ colors }: Theme) => {
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
      backgroundColor: colors.background,
    },
    tabBarLabelStyle: {
      fontSize: 10,
      fontFamily: "Inter_500",
    },
  };
};
