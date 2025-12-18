import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalColors";

const styles = StyleSheet.create({
  searchField: {
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 8,
    marginLeft: globalGaps.small,
    fontSize: 16,
  },
});

export default styles;
