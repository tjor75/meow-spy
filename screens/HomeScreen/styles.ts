import { StyleSheet } from "react-native";
import { globalGaps } from "../../styles/globalColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerPortrait: {
    flex: 1,
    flexDirection: 'column',
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
  },
  cameraLandscape: {
    display: 'none',
    flex: 2, // 2/3 of the width in landscape
  },
  sidebar: {
    flex: 3,
    paddingHorizontal: globalGaps.large,
    marginVertical: 12,
  },
  sidebarLandscape: {
    flex: 1,
  },
  sidebarPortrait: {
    flex: 4,
  },
});

export default styles;
