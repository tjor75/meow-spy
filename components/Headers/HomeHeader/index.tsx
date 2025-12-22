import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import useTheme from "../../../hooks/useTheme";
import Header from "../../Header";
import MText from "../../UI/MText";
import styles from "./styles";

export default function HomeScreen() {
    const navigation = useNavigation();
    const { theme } = useTheme();

    return (
        <Header style={{ justifyContent: 'space-between' }} goBack={false}>
        <MText style={styles.headerText}>Meow Spy</MText>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Feather name="search" size={24} color={theme.color} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Feather name="settings" size={24} color={theme.color} />
          </TouchableOpacity>
        </View>
      </Header>
    );
}