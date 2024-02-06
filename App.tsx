import React from "react";
import withFontLoad from "@components/HOC/withFontLoad";
import Router from "@/routes/Router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Router />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default withFontLoad(App);
