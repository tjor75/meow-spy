import { useContext } from "react";
import { Picker } from "@react-native-picker/picker";
import { ThemeContext } from "../../../contexts/ThemeContext";

export function ThemeSettingsScreen() {
  const { themePreference, setThemePreference } = useContext(ThemeContext);

  return (
    <Picker
      selectedValue={themePreference}
      onValueChange={(itemValue) => {
        setThemePreference(itemValue);
      }}>
        <Picker.Item label="System" value={null} />
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />
    </Picker>
  );
}
