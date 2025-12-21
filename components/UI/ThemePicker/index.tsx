import { Picker } from "@react-native-picker/picker";
import useTheme from "../../../hooks/useTheme";
import MPicker from "../MPicker";

export default function ThemePicker() {
  const { themePreference, setThemePreference } = useTheme();

  return (
    <MPicker
      selectedValue={themePreference}
      onValueChange={(itemValue) => {
        setThemePreference(itemValue);
      }}>
        <Picker.Item label="System" value={null} />
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />
    </MPicker>
  );
}
