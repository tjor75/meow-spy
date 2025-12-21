import { StyleSheet } from "react-native";
import { globalColors } from "../../../styles/globalColors";
import { globalGaps } from "../../../styles/globalGaps";

const styles = StyleSheet.create({
  text: {
    backgroundColor: globalColors.blue,
    color: globalColors.white,
    paddingHorizontal: globalGaps.large,
    paddingVertical: globalGaps.small,
  }
});

export default styles;
