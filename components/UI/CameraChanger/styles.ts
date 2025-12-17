import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: globalGaps.small,
  },
  button: {
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  }
});

export default styles;
