import { useTheme } from "@/context/themeContext";
import React from "react";
import { StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";

interface CustomCalendarProps {
  selectedDate: string;
  onDaySelect?: ((date: DateData) => void) | undefined;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  selectedDate,
  onDaySelect,
}) => {
  const { colors } = useTheme();

  return (
    <Calendar
      onDayPress={onDaySelect}
      enableSwipeMonths
      markedDates={{
        [selectedDate]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
      minDate={new Date().toDateString()}
      disableAllTouchEventsForDisabledDays={true}
      theme={{
        calendarBackground: "transparent",
        dayTextColor: colors.text,
        monthTextColor: colors.text,
        textDayFontFamily: "Inter_400",
        textMonthFontFamily: "Inter_500",
        todayTextColor: colors.notification,
        todayBackgroundColor: colors.inputBackground,
        textDisabledColor: colors.placeholderText,
        selectedDayBackgroundColor: colors.notification,
        selectedDayTextColor: colors.text,
        textSectionTitleColor: colors.text,
        arrowColor: colors.text,
      }}
    />
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({});
