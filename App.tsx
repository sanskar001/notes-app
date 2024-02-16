import React from "react";
import withFontLoad from "@components/HOC/withFontLoad";
import Router from "@/routes/Router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeContextProvider } from "@/context/themeContext";
import { useColorScheme } from "react-native";
import Theme from "@/constant/theme";
import { Provider } from "react-redux";
import { store } from "@/store";

const App: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeContextProvider
          theme={scheme === "dark" ? Theme.dark : Theme.light}
        >
          <BottomSheetModalProvider>
            <Router />
          </BottomSheetModalProvider>
        </ThemeContextProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default withFontLoad(App);
