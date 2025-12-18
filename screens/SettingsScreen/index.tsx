import { View } from "react-native";
import Screen from "../../components/UI/Screen";
import Header from "../../components/Header";
import MText from "../../components/UI/MText";
import ThemePicker from "../../components/UI/ThemePicker";
import styles from "./styles";

export default function SettingsScreen() {
  return (
    <Screen>
      <Header>
        <MText>Settings</MText>
      </Header>
      <View>
        <View>
          <MText>Theme</MText>
          <ThemePicker />
        </View>
        <View style={styles.about}>
          <MText style={styles.aboutText}>Meow Spy</MText>
          <MText style={styles.aboutText}>Powered by Meow.camera & Purrrr</MText>
          <MText style={styles.aboutText}>Version Alpha 1.0.0</MText>
        </View>
      </View>
    </Screen>
  );
}
