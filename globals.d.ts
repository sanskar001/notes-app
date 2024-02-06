import { CustomTheme } from "@/constant/theme";

declare module "@react-navigation/native" {
  export function useTheme(): CustomTheme;
}
