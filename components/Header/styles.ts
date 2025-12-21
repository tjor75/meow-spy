import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalGaps";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: globalGaps.large,
    paddingVertical: 8,
  },
});

export default styles;
