import { Theme } from "@react-navigation/native";
import { colors } from "./colors";

export type CustomTheme = Theme & {
  colors: {
    // background2: string;
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
  },
};

export default { light: lightTheme, dark: darkTheme };
