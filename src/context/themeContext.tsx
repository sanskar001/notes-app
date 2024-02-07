import React, { useContext } from "react";
import Theme, { CustomTheme } from "@/constant/theme";

const ThemeContext = React.createContext(Theme.light);

export default ThemeContext;

export interface ThemeContextProviderProps {
  theme: CustomTheme;
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): CustomTheme => {
  const theme = useContext(ThemeContext);

  return theme;
};
