import React, { useCallback, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
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
      Inter_700: Inter_700Bold,
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
