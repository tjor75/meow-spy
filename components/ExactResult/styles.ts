import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalColors";

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: globalGaps.medium,
  },
  headerStyle: {
    marginBottom: 8
  },
  textStyle: {
    fontSize: 20,
  },
});

export default styles;
