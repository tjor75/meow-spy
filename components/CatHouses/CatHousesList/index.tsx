import { View } from "react-native";
import { CatHouse, getNameFromCatHouse } from "../../../lib/meow-camera";
import useCatHouse from "../../../hooks/useCatHouse";
import MButton from "../../UI/MButton";
import MText from "../../UI/MText";
import { globalColors } from "../../../styles/globalColors";
import styles from "./styles";

type CatHousesListProps = {
  catHouses: CatHouse[];
};

export default function CatHousesList({ catHouses }: CatHousesListProps) {
  const { catHouseId, setCatHouseId } = useCatHouse();

  return (
    <View style={styles.container}>
      {catHouses.map((theCatHouse: CatHouse) => (
        <MButton
          key={theCatHouse.id}
          onPress={() => setCatHouseId(theCatHouse.id)}
          backgroundColor={theCatHouse.id === catHouseId ? globalColors.blue : undefined}
        >
          <MText>{getNameFromCatHouse(theCatHouse)}</MText>
        </MButton>
      ))}
      {catHouses.length === 0 && (
        <MText style={styles.noCatHouses}>~ No cat houses available. ~</MText>
      )}
    </View>
  );
}
