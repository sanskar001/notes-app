import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@/context/themeContext";
import CustomCalendar from "../UI/CustomCalendar";
import { DateData } from "react-native-calendars";

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

  const daySelectHandler = (date: DateData) => {
    setSelectedDate(date.dateString);
    console.log({ date });
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
        <View style={styles.dateTimeContainer}>
          <CustomCalendar
            onDaySelect={daySelectHandler}
            selectedDate={selectedDate}
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
  dateTimeContainer: {
    marginTop: 16,
  },
});
