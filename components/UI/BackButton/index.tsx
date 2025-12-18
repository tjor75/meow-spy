import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import useTheme from "../../../hooks/useTheme";

export default function BackButton() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Feather name="arrow-left" size={24} color={theme.color} />
    </TouchableOpacity>
  );
}
