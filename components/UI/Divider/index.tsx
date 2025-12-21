import { View } from "react-native";
import styles from "./styles";

export default function Divider({ style }: { style?: object }) {
  return (
    <View style={[styles.divider, style]} />
  );
}
