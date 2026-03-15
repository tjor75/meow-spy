import { StyleSheet } from "react-native";
import { globalColors } from "../../../styles/globalColors";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: globalColors.black,
  },

  videoView: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  playerErrorText: {
    color: "white",
    fontSize: 18,
  },

  thumbnail: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
