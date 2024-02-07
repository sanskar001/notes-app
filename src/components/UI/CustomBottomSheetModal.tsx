import React, { useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "@UI/IconButton";
import { useTheme } from "@/context/themeContext";

interface BottomSheetModalProps {
  title: string;
  children: React.ReactNode;
  snapPoint: string | number;
  hasSubmitButtonOnTop?: boolean;
  disabledSubmitButton?: boolean;
  onSubmit?: () => void;
  dismissModal: () => void;
}

type Ref = BottomSheetModal;

const CustomBottomSheetModal = React.forwardRef<Ref, BottomSheetModalProps>(
  (
    {
      children,
      snapPoint,
      title,
      hasSubmitButtonOnTop = true,
      disabledSubmitButton = false,
      dismissModal,
      onSubmit,
    },
    ref
  ) => {
    const { colors } = useTheme();

    const renderBackdrop: React.FC<BottomSheetBackdropProps> = useCallback(
      (props) => {
        return (
          <BottomSheetBackdrop
            {...props}
            opacity={0.2}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior={"close"}
            onPress={dismissModal}
          />
        );
      },
      []
    );

    const submitHandler = () => {
      if (!disabledSubmitButton && onSubmit) {
        onSubmit();
      }
      dismissModal();
    };

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={[snapPoint]}
        backdropComponent={renderBackdrop}
        style={{ padding: 16 }}
        backgroundStyle={{ backgroundColor: colors.card }}
        handleStyle={{ height: 0, padding: 0 }}
        handleIndicatorStyle={{ display: "none" }}
      >
        <BottomSheetView style={styles.header}>
          <IconButton
            name="close-outline"
            size={24}
            color={colors.text}
            onPress={dismissModal}
          />
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          <View style={styles.rightButton}>
            {hasSubmitButtonOnTop && (
              <IconButton
                name="checkmark-outline"
                size={24}
                color={colors.text}
                onPress={submitHandler}
                disabled={disabledSubmitButton}
              />
            )}
          </View>
        </BottomSheetView>
        <BottomSheetView style={styles.body}>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Inter_600",
    textAlign: "center",
  },
  rightButton: {
    width: 40,
  },
  body: {
    marginTop: 24,
  },
});
