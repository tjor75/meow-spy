import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalColors";

const styles = StyleSheet.create({
  about: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    marginTop: globalGaps.medium,
    paddingTop: globalGaps.medium,
  },
  aboutText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
