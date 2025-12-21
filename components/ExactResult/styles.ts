import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalGaps";

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: globalGaps.medium,
  },
  header: {
    marginBottom: 8
  },
  text: {
    fontSize: 20,
  },
});

export default styles;
