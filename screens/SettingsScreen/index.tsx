import { View } from "react-native";
import useTheme from "../../hooks/useTheme";
import Screen from "../../components/UI/Screen";
import Header from "../../components/Header";
import MText from "../../components/UI/MText";
import ScrollContainer from "../../components/UI/ScrollContainer";
import ThemePicker from "../../components/UI/ThemePicker";
import Divider from "../../components/UI/Divider";
import About from "../../components/UI/About";

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
        <Divider />
        <About />
      </ScrollContainer>
    </Screen>
  );
}
