import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalGaps";
import { globalColors } from "../../styles/globalColors";

const styles = StyleSheet.create({
  container: {
    borderColor: globalColors.neutral,
    borderWidth: 1,
    borderRadius: 8,
    padding: globalGaps.medium,
  },
  header: {
    marginBottom: 8
  },
  text: {
    fontSize: 20,
  },
});

export default styles;
