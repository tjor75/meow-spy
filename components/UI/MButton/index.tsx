import { StyleProp, TouchableOpacity } from "react-native";
import useTheme from "../../../hooks/useTheme";
import styles from "./styles";

export type MButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  backgroundColor?: string;
  squared?: boolean;
  style?: StyleProp<any>;
  [key: string]: any;
};

export default function MButton({ children, onPress, backgroundColor, squared, style, ...props }: MButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor ?? theme.buttonBg,
          paddingHorizontal: squared ? 4 : 7
        },
        { ...style }
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
