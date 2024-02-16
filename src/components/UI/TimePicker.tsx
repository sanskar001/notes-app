import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ScrollPicker from "@/components/UI/ScrollPicker";
import { getTimeList } from "@/utils/getTimeList";
import { useTheme } from "@/context/themeContext";

const hourList = getTimeList("hour");
const minuteList = getTimeList("min");

export interface Time {
  hour: string;
  min: string;
}

interface TimePickerProps {
  selectedTime: Time;
  onSelect: (value: Time) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onSelect }) => {
  const { colors } = useTheme();
  const [time, setTime] = useState<Time>(selectedTime);

  useEffect(() => {
    onSelect(time);
  }, [time]);

  const hourSelectHandler = (value: string) => {
    setTime((prevTime) => ({ ...prevTime, hour: value }));
  };

  const minSelectHandler = (value: string) => {
    setTime((prevTime) => ({ ...prevTime, min: value }));
  };

  return (
    <View style={styles.timePicker}>
      <ScrollPicker
        label="h"
        itemList={hourList}
        value={time.hour}
        onSelect={hourSelectHandler}
      />
      <ScrollPicker
        label="min"
        itemList={minuteList}
        value={time.min}
        onSelect={minSelectHandler}
      />
      <View
        style={[styles.overlay, { backgroundColor: colors.highlight }]}
      ></View>
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  timePicker: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 40,
  },
  overlay: {
    height: 40,
    width: "100%",
    position: "absolute",
    top: "50%",
    opacity: 0.5,
    zIndex: -1,
    transform: [{ translateY: -20 }],
    borderRadius: 20,
  },
});
