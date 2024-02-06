import React, { useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

interface BottomSheetModalProps {
  children: React.ReactNode;
  snapPoint: string | number;
  dismissModal: () => void;
}

type Ref = BottomSheetModal;

const CustomBottomSheetModal = React.forwardRef<Ref, BottomSheetModalProps>(
  ({ children, snapPoint, dismissModal }, ref) => {
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

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={[snapPoint]}
        backdropComponent={renderBackdrop}
        style={{ padding: 16 }}
        backgroundStyle={{
          backgroundColor: colors.card,
        }}
        handleStyle={{ height: 0, padding: 0 }}
        handleIndicatorStyle={{ display: "none" }}
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default CustomBottomSheetModal;

const styles = StyleSheet.create({});
