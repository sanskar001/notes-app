import React from "react";
import { Text } from "react-native";
import withFontLoad from "@components/HOC/withFontLoad";
import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Text style={{ fontFamily: "Inter_300", fontSize: 54 }}>App</Text>
    </>
  );
};

export default withFontLoad(App);
