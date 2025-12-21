import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalGaps";

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  container: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: globalGaps.large,
    gap: globalGaps.medium,
  },
});

export default styles;
