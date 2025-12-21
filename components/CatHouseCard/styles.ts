import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalGaps";

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: globalGaps.small,
  },
  nameText: {
    flex: 1,
    flexShrink: 1,
  },
  idText: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});

export default styles;
