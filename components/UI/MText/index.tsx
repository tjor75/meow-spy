import { Text } from "react-native";
import useTheme from "../../../hooks/useTheme";

export default function MText({ children, style, ...props }: React.ComponentProps<typeof Text>) {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        { color: theme.color, fontFamily: "ZenMaruGothic-Regular", fontSize: 16 },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
