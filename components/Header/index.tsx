import { View } from "react-native";
import useTheme from "../../hooks/useTheme";
import MText from "../UI/MText";
import styles from "./styles";

export default function Header() {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.headerBg }]}>
      <MText style={styles.text}>Meow Spy</MText>
    </View>
  );
}
