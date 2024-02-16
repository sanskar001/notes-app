import React from "react";
import { useTheme } from "@/context/themeContext";
import { View, Text, StyleSheet, Pressable } from "react-native";

export interface Tab<T> {
  label: string;
  value: T;
}

interface TabsProps<T> {
  tabList: Array<Tab<T>>;
  activeTab?: T;
  onSelectTab?: (tabValue: T) => void;
}

const Tabs = <T,>({ tabList, activeTab, onSelectTab }: TabsProps<T>) => {
  const { colors } = useTheme();

  return (
    <View style={styles.tabContainer}>
      {tabList.map((tab) => {
        return (
          <View key={tab.value as string} style={styles.tab}>
            <Pressable
              android_ripple={{
                color: activeTab === tab.value ? colors.text : colors.border,
              }}
              style={[
                styles.tabButton,
                {
                  backgroundColor:
                    activeTab === tab.value
                      ? colors.activeTabBackground
                      : colors.tabBackground,
                },
              ]}
              onPress={onSelectTab?.bind(null, tab.value)}
            >
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color:
                      activeTab === tab.value
                        ? colors.activeTabText
                        : colors.tabText,
                  },
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  tab: {
    borderRadius: 20,
    overflow: "hidden",
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  tabLabel: {
    fontFamily: "Inter_400",
    fontSize: 14,
  },
});
