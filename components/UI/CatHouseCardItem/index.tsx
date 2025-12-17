import { View } from "react-native";
import { CatHouse, getNameFromCatHouse } from "../../../lib/meow-camera";
import MText from "../MText";
import styles from "./styles";

type CatHouseCardProps = {
  catHouse: CatHouse;
};

export default function CatHouseCardItem({ catHouse }: CatHouseCardProps) {
  return (
    <View style={styles.catHouseCard}>
      <MText>{getNameFromCatHouse(catHouse)}</MText>
    </View>
  );
}
