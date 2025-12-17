import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import MText from "../MText";
import styles from "./styles";
import { globalColors } from "../../../styles/globalColors";

type IconDetailProps = {
  icon: any;
  detail: string;
};

export default function IconDetail({ icon, detail }: IconDetailProps) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={16} color={globalColors.grey} />
      <MText style={{ color: globalColors.grey }}>{detail}</MText>
    </View>
  );
}
