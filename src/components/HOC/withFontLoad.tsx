import React, { useCallback } from "react";
import { View } from "react-native";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function withFontLoad(WrappedComponent: React.FC) {
  const WithFontComponent: React.FC = () => {
    const [fontsLoaded, fontError] = useFonts({
      Inter_300: Inter_300Light,
      Inter_400: Inter_400Regular,
      Inter_500: Inter_500Medium,
      Inter_600: Inter_600SemiBold,
    });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
      return null;
    }

    return (
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <WrappedComponent />
      </View>
    );
  };

  return WithFontComponent;
}
