import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cameraContainer: {
    position: 'relative',
    backgroundColor: 'black',
    //width: '100%',
    //height: '100%',
  },
  cameraContainerLandscape: {
    flex: 2,
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
});

export default styles;
