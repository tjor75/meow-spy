import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalGaps";

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: globalGaps.medium,
  },

  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
  },
  containerPortrait: {
    flex: 1,
    flexDirection: 'column',
  },

  sidebarLandscape: {
    flex: 1,
  },
  sidebarPortrait: {
    flex: 3,
  },
});

export default styles;
