import { StyleProp, TouchableOpacity } from "react-native";
import useTheme from "../../../hooks/useTheme";
import styles from "./styles";

export type MButtonProps = {
  children: React.ReactNode;
  style?: StyleProp<any>;
  backgroundColor?: string;
  onPress: () => void;
  squared?: boolean;
  [key: string]: any;
};

export default function MButton({ children, backgroundColor, onPress, squared, ...props }: MButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor ?? theme.buttonBg,
          paddingHorizontal: squared ? 4 : 7
        },
        props.style
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}
