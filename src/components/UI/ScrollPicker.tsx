import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconButton from "@UI/IconButton";
import { useTheme } from "@/context/themeContext";
import { colors } from "@/constant/colors";

interface ScrollPickerProps {
  itemList: Array<string>;
  value: string;
  label?: string;
  onSelect: (value: string) => void;
}

const ITEM_HEIGHT = 40; // px
const VISIBLE_ITEM_LENGTH = 3;

const ScrollPicker: React.FC<ScrollPickerProps> = ({
  itemList,
  value,
  onSelect,
  label,
}) => {
  const { colors } = useTheme();
  const scrollIndex = useRef<number>(itemList.indexOf(value) - 1);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollIndex.current = itemList.indexOf(value) - 1;
    scrollViewRef.current?.scrollTo({
      y: ITEM_HEIGHT * scrollIndex.current,
      animated: false,
    });
  }, []);

  const upPressHandler = () => {
    if (scrollIndex.current <= 0) {
      scrollIndex.current = itemList.length - VISIBLE_ITEM_LENGTH;
      scrollViewRef.current?.scrollTo({
        y: ITEM_HEIGHT * scrollIndex.current,
        animated: false,
      });
    }

    scrollIndex.current -= 1;
    scrollViewRef.current?.scrollTo({
      y: ITEM_HEIGHT * scrollIndex.current,
      animated: true,
    });

    onSelect(itemList[scrollIndex.current + 1]);
  };

  const downPressHandler = () => {
    if (scrollIndex.current >= itemList.length - VISIBLE_ITEM_LENGTH) {
      scrollIndex.current = 0;
      scrollViewRef.current?.scrollTo({
        y: ITEM_HEIGHT * scrollIndex.current,
        animated: false,
      });
    }

    scrollIndex.current += 1;
    scrollViewRef.current?.scrollTo({
      y: ITEM_HEIGHT * scrollIndex.current,
      animated: true,
    });

    onSelect(itemList[scrollIndex.current + 1]);
  };

  return (
    <View style={styles.scrollPicker}>
      <IconButton
        name="chevron-up-outline"
        color={colors.text}
        size={20}
        onPress={upPressHandler}
      />
      <View style={styles.scrollbar}>
        <ScrollView
          ref={scrollViewRef}
          snapToInterval={ITEM_HEIGHT}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        >
          {itemList.map((item, index) => {
            return (
              <Text
                key={index}
                style={[
                  styles.item,
                  value === item
                    ? {
                        color: colors.notification,
                        ...styles.selectedItem,
                      }
                    : null,
                ]}
              >
                {item}{" "}
                {label && (
                  <Text style={styles.label}>
                    {value === item ? label : ""}
                  </Text>
                )}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <IconButton
        name="chevron-down-outline"
        color={colors.text}
        size={20}
        onPress={downPressHandler}
      />
    </View>
  );
};

export default ScrollPicker;

const styles = StyleSheet.create({
  scrollPicker: {
    alignItems: "center",
  },
  scrollbar: {
    height: ITEM_HEIGHT * 3,
    alignItems: "center",
  },
  item: {
    fontSize: 16,
    lineHeight: ITEM_HEIGHT,
    textAlign: "center",
    color: colors.smokePearl,
  },
  selectedItem: {
    fontFamily: "Inter_500",
    fontSize: 18,
  },
  label: {
    fontSize: 12,
    fontFamily: "Inter_400",
  },
});
