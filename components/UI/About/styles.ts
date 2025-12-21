import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalGaps";
import { globalColors } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  aboutText: {
    textAlign: 'center',
    fontSize: 14,
    color: globalColors.neutral,
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
});

export default styles;
