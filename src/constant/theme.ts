import { colors } from "./colors";
import { Theme } from "@react-navigation/native";

export type CustomTheme = Theme & {
  colors: {
    inputBackground: string;
    placeholderText: string;
    highlight: string;
  };
};

export const darkTheme: CustomTheme = {
  dark: true,
  colors: {
    primary: colors.black,
    background: colors.black,
    card: colors.gray,
    text: colors.white,
    border: colors.gray,
    notification: colors.primary,
    inputBackground: colors.buildingGray,
    placeholderText: colors.smokePearl,
    highlight: colors.smokePearl,
  },
};

export const lightTheme: CustomTheme = {
  dark: false,
  colors: {
    primary: colors.white,
    background: colors.paperWhite,
    card: colors.paperWhite,
    text: colors.black,
    border: colors.lightGray,
    notification: colors.primary,
    inputBackground: colors.white,
    placeholderText: colors.silverback,
    highlight: colors.white,
  },
};

export default { light: lightTheme, dark: darkTheme };
