import { Text } from "react-native";
import useTheme from "../../../hooks/useTheme";
import styles from "./styles";

export default function MText({ ...props }: React.ComponentProps<typeof Text>) {
  const { theme } = useTheme();

  return (
    <Text
      {...props}
      style={[styles.text, { color: theme.color }, props.style]}
    >
      {props.children}
    </Text>
  );
}
