import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@/context/themeContext";
import CustomCalendar from "@UI/CustomCalendar";
import { DateData } from "react-native-calendars";
import TimePicker, { Time } from "@UI/TimePicker";
import Tabs, { Tab } from "@UI/Tabs";

type ReminderTabs = "date" | "time";

export interface Datetime {
  date: string;
  time: Time;
}

interface TodoReminderProps {
  onClose: () => void;
  onAddReminder: (datetime: Datetime) => void;
}

const TodoReminder: React.FC<TodoReminderProps> = ({
  onClose,
  onAddReminder,
}) => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [date, setDate] = useState<string>("2024-02-17");
  const [time, setTime] = useState<Time>({ hour: "12", min: "30" });
  const [activeTab, setActiveTab] = useState<ReminderTabs>("date");

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

  const tabSelectHandler = (tabValue: ReminderTabs) => {
    setActiveTab(tabValue);
  };

  const submitHandler = () => {
    onAddReminder({ date, time });
  };

  const reminderTabs: Array<Tab<ReminderTabs>> = useMemo(
    () => [
      { label: date, value: "date" },
      { label: `${time.hour}:${time.min}`, value: "time" },
    ],
    [date, time]
  );

  return (
    <CustomBottomSheetModal
      snapPoint={"70%"}
      title="Schedule reminder"
      ref={bottomSheetModalRef}
      dismissModal={dismissModalHandler}
      onDismiss={dismissModalHandler}
      onSubmit={submitHandler}
    >
      <View>
        <Text style={[styles.title, { color: colors.text }]}>Remind Me On</Text>
        <View style={styles.tabsContainer}>
          <Tabs
            tabList={reminderTabs}
            activeTab={activeTab}
            onSelectTab={tabSelectHandler}
          />
        </View>
        <View style={styles.dateTimeContainer}>
          {activeTab === "date" ? (
            <CustomCalendar
              onDaySelect={daySelectHandler}
              selectedDate={date}
            />
          ) : (
            <View style={styles.timePickerContainer}>
              <TimePicker selectedTime={time} onSelect={timeSelectHandler} />
            </View>
          )}
        </View>
      </View>
    </CustomBottomSheetModal>
  );
};

export default TodoReminder;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Inter_500",
    paddingHorizontal: 16,
  },
  tabsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  dateTimeContainer: {
    marginTop: 20,
  },
  timePickerContainer: {
    paddingHorizontal: 16,
  },
});
