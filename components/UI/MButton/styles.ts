import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalGaps";

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 4,
    borderRadius: 8,
    gap: globalGaps.small,
  }
});

export default styles;
