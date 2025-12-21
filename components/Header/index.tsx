import { View } from "react-native";
import BackButton from "../UI/BackButton";
import useTheme from "../../hooks/useTheme";
import styles from "./styles";

type HeaderProps = {
  children: React.ReactNode;
  style?: { [key: string]: any };
  goBack?: boolean;
};

export default function Header({ children, style, goBack = true }: HeaderProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.altBackground }, style]}>
      {goBack && <BackButton />}
      {children}
    </View>
  );
}
