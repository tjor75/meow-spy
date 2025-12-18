import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: globalGaps.large,
    paddingVertical: 8,
    width: '100%',
  },
});

export default styles;
