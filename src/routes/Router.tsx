import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "@/screens/SettingScreen";
import NoteScreen from "@/screens/NoteScreen";
import TodoScreen from "@/screens/TodoScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { setTabNavigatorOptions } from "./options";
import { useTheme } from "@/context/themeContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Todos"
      screenOptions={setTabNavigatorOptions(theme)}
    >
      <Tab.Screen
        name="Notes"
        component={NoteScreen}
        options={{
          tabBarLabel: "Notes",
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name={focused ? "document-text" : "document-text-outline"}
              color={theme.colors.text}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodoScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name={focused ? "bag-check" : "bag-check-outline"}
              color={theme.colors.text}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router: React.FC = () => {
  return (
    <NavigationContainer>
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
