import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalGaps";

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: globalGaps.medium,
  },
});

export default styles;
