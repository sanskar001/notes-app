import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@/context/themeContext";
import CustomCalendar from "@UI/CustomCalendar";
import { DateData } from "react-native-calendars";
import TimePicker, { Time } from "@UI/TimePicker";

interface TodoReminderProps {
  onClose: () => void;
}

const TodoReminder: React.FC<TodoReminderProps> = ({ onClose }) => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [date, setDate] = useState<string>("2024-02-17");
  const [time, setTime] = useState<Time>({
    hour: "12",
    min: "30",
  });

  useEffect(() => {
    bottomSheetModalRef.current?.present();

    return dismissModalHandler;
  }, []);

  const dismissModalHandler = () => {
    bottomSheetModalRef.current?.dismiss();
    onClose();
  };

  const daySelectHandler = (date: DateData) => {
    setDate(date.dateString);
  };

  const timeSelectHandler = (time: Time) => {
    setTime(time);
  };

  return (
    <CustomBottomSheetModal
      snapPoint={"90%"}
      title="Schedule reminder"
      ref={bottomSheetModalRef}
      dismissModal={dismissModalHandler}
      onDismiss={dismissModalHandler}
    >
      <View style={styles.reminderContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Remind Me On</Text>
        <View>
          <Text style={{ color: colors.notification }}>
            {date} {time.hour}:{time.min}
          </Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <CustomCalendar onDaySelect={daySelectHandler} selectedDate={date} />
          <View style={styles.timePickerContainer}>
            <TimePicker selectedTime={time} onSelect={timeSelectHandler} />
          </View>
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
  dateTimeContainer: {
    marginTop: 16,
  },
  timePickerContainer: {
    paddingHorizontal: 16,
  },
});
