import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "@/screens/SettingScreen";
import NoteScreen from "@/screens/NoteScreen";
import TodoScreen from "@/screens/TodoScreen";
import { useColorScheme } from "react-native";
import Theme from "@/constant/theme";
import Icon from "react-native-vector-icons/Ionicons";
import { setTabNavigatorOptions } from "./options";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Notes"
      screenOptions={setTabNavigatorOptions(theme)}
    >
      <Tab.Screen
        name="Notes"
        component={NoteScreen}
        options={{
          tabBarLabel: "Notes",
          tabBarIcon: ({ focused, size, color }) => (
            <Icon
              name={focused ? "document-text" : "document-text-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodoScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon
              name={focused ? "bag-check" : "bag-check-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? Theme.dark : Theme.light}>
      <Stack.Navigator initialRouteName="Home">
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

export default Router;
