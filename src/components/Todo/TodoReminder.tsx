import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBottomSheetModal from "@UI/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@/context/themeContext";

interface TodoReminderProps {
  onClose: () => void;
}

const TodoReminder: React.FC<TodoReminderProps> = ({ onClose }) => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    bottomSheetModalRef.current?.present();

    return dismissModalHandler;
  }, []);

  const dismissModalHandler = () => {
    bottomSheetModalRef.current?.dismiss();
    onClose();
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
      </View>
    </CustomBottomSheetModal>
  );
};

export default TodoReminder;

const styles = StyleSheet.create({
  reminderContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter_500",
  },
});
