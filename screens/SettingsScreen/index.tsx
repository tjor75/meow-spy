import { View } from "react-native";
import useTheme from "../../hooks/useTheme";
import Screen from "../../components/UI/Screen";
import Header from "../../components/Header";
import MText from "../../components/UI/MText";
import ScrollContainer from "../../components/UI/ScrollContainer";
import ThemePicker from "../../components/UI/ThemePicker";
import styles from "./styles";

export default function SettingsScreen() {
  const { theme } = useTheme();

  return (
    <Screen>
      <Header>
        <MText>Settings</MText>
      </Header>
      <ScrollContainer>
        <View>
          <MText>Theme</MText>
          <ThemePicker />
        </View>
        <View style={[{ borderTopColor: theme.altBackground }, styles.about]}>
          <MText style={styles.aboutText}>Meow Spy</MText>
          <MText style={styles.aboutText}>Powered by Meow.camera & Purrrr</MText>
          <MText style={styles.aboutText}>Version Alpha 1.0.0</MText>
        </View>
      </ScrollContainer>
    </Screen>
  );
}
