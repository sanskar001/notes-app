import React from "react";
import withFontLoad from "@components/HOC/withFontLoad";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "@/screens/SettingScreen";
import NoteScreen from "@/screens/NoteScreen";
import TodoScreen from "@/screens/TodoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: "" }}>
      <Tab.Screen name="Note" component={NoteScreen} />
      <Tab.Screen name="Todo" component={TodoScreen} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withFontLoad(App);
