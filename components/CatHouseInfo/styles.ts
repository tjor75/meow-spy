import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalGaps";

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: globalGaps.small,
  },
  rowRight: {
    flexDirection: 'row',
    gap: globalGaps.small,
  },
});

export default styles;
