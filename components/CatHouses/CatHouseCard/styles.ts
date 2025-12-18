import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: globalGaps.medium,
  },
  id: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});

export default styles;
