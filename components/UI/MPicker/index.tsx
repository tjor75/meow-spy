import { Picker } from "@react-native-picker/picker";
import useTheme from "../../../hooks/useTheme";

export default function MPicker({ ...props }: React.ComponentProps<typeof Picker>) {
  const { colorScheme } = useTheme();

  return (
    <Picker
      {...props}
      style={[
        { backgroundColor: colorScheme.buttonBg },
        props.style,
      ]}
    >
        {props.children}
    </Picker>
  );
}
