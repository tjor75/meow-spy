import { View } from "react-native";
import useTheme from "../../../hooks/useTheme";
import styles from "./styles";

export default function Header({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}>
      {children}
    </View>
  );
}
