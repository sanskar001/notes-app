import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@/context/themeContext";
import { Calendar, DateData } from "react-native-calendars";

interface TodoReminderProps {
  onClose: () => void;
}

const TodoReminder: React.FC<TodoReminderProps> = ({ onClose }) => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    bottomSheetModalRef.current?.present();

    return dismissModalHandler;
  }, []);

  const dismissModalHandler = () => {
    bottomSheetModalRef.current?.dismiss();
    onClose();
  };

  const dayPressHandler = (date: DateData) => {
    setSelectedDate(date.dateString);
  };

  return (
    <CustomBottomSheetModal
      snapPoint={"75%"}
      title="Schedule reminder"
      ref={bottomSheetModalRef}
      dismissModal={dismissModalHandler}
      onDismiss={dismissModalHandler}
    >
      <View style={styles.reminderContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Remind Me On</Text>
        <View style={styles.calendar}>
          <Calendar
            onDayPress={dayPressHandler}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
            minDate={new Date().toDateString()}
            enableSwipeMonths
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
        </View>
      </View>
    </CustomBottomSheetModal>
  );
};

export default TodoReminder;

const styles = StyleSheet.create({
  reminderContainer: {},
  title: {
    fontSize: 16,
    fontFamily: "Inter_500",
    paddingHorizontal: 16,
  },
  calendar: {
    marginTop: 16,
  },
});
