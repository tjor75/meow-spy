import { StyleSheet } from "react-native";
import { globalColors } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  cameraContainer: {
    position: 'relative',
    backgroundColor: globalColors.black,
  },
  cameraContainerLandscape: {
    flex: 0.8,
  },
  cameraContainerPortrait: {
    height: 250,
  },

  cameraPlayer: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  loadingText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  },

  thumbnail: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
