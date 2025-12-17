import { StyleSheet } from "react-native";
import { globalGaps } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginTop: globalGaps.large,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: globalGaps.medium,
    marginBottom: globalGaps.small,
  },
  titlePressable: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
});

export default styles;
