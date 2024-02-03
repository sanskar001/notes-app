import { Theme } from "@react-navigation/native";
import { colors } from "./colors";

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.white,
    background: colors.black,
    card: colors.gray,
    text: colors.white,
    border: colors.gray,
    notification: colors.primary,
  },
};

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.black,
    background: colors.paperWhite,
    card: colors.gray,
    text: colors.black,
    border: colors.gray,
    notification: colors.primary,
  },
};

export default { light: lightTheme, dark: darkTheme };
