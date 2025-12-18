import { View } from "react-native";
import BackButton from "../UI/BackButton";
import useTheme from "../../hooks/useTheme";
import styles from "./styles";

export default function Header({ children, goBack = true }: { children: React.ReactNode, goBack?: boolean }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}>
      {goBack &&  <BackButton />}
      {children}
    </View>
  );
}
