import { Linking, TouchableOpacity, View } from "react-native";
import MText from "../MText";
import Divider from "../Divider";
import styles from "./styles";

export default function About() {
  const openWebsite = () => {
    Linking.openURL('https://tjor.vercel.app/');
  };

  const openRepository = () => {
    Linking.openURL('https://github.com/tjor75/meow-spy');
  };

  return (
    <View>
      <MText style={styles.aboutText}>Meow Spy</MText>
      <MText style={styles.aboutText}>Version Alpha 1.0.1</MText>
      <MText style={styles.aboutText}>Powered by Meow.camera & Purrrr</MText>
      <View style={styles.lastRow}>
        <TouchableOpacity onPress={openWebsite}>
          <MText style={styles.aboutText}>App by Tjor</MText>
        </TouchableOpacity>
        -
        <TouchableOpacity onPress={openRepository}>
          <MText style={styles.aboutText}>Star on GitHub</MText>
        </TouchableOpacity>
      </View>
      <Divider />
      <MText style={styles.aboutText}>Using font Zen Maru Gothic by Yoshimichi Ohira (OSL)</MText>
      <MText style={styles.aboutText}>Icon made using Expo-Icon-Builder + Twemoji</MText>
      <Divider />
      <MText style={styles.aboutText}>This project has been developed without commercial purposes as a hobby. This app is NOT affiliated with Guangxi Ha Chong Network Technology Co., Ltd.</MText>
    </View>
  );
}
