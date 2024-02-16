import React, { useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconButton from "@UI/IconButton";
import { useTheme } from "@/context/themeContext";

interface CustomTimePickerProps {}

const sampleArr = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "00",
  "01",
  "02",
];
const ITEM_HEIGHT = 40; // px
const VISIBLE_ITEM_LENGTH = 3;

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({}) => {
  const { colors } = useTheme();
  const scrollIndex = useRef<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const upPressHandler = () => {
    if (scrollIndex.current <= 0) {
      scrollIndex.current = sampleArr.length - VISIBLE_ITEM_LENGTH;
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

    console.log({
      index: scrollIndex.current,
      value: sampleArr[scrollIndex.current + 1],
    });
  };

  const downPressHandler = () => {
    if (scrollIndex.current >= sampleArr.length - VISIBLE_ITEM_LENGTH) {
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

    console.log({
      index: scrollIndex.current,
      value: sampleArr[scrollIndex.current + 1],
    });
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
          snapToInterval={28}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        >
          {sampleArr.map((item, index) => {
            return (
              <Text key={index} style={[styles.item, { color: colors.text }]}>
                {item}
              </Text>
            );
          })}
        </ScrollView>
        <View
          style={[styles.overlay, { backgroundColor: colors.inputBackground }]}
        ></View>
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

export default CustomTimePicker;

const styles = StyleSheet.create({
  scrollPicker: {
    alignItems: "center",
  },
  scrollbar: {
    height: ITEM_HEIGHT * 3,
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    height: ITEM_HEIGHT,
    width: "100%",
    position: "absolute",
    top: "50%",
    opacity: 0.5,
    zIndex: -1,
    transform: [{ translateY: -(ITEM_HEIGHT / 2) }],
    borderRadius: 16,
  },
  item: {
    fontSize: 16,
    lineHeight: ITEM_HEIGHT,
  },
  selectedItem: {
    fontFamily: "Inter_600",
  },
});
