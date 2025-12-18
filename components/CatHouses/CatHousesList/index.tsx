import { View } from "react-native";
import { CatHouse } from "../../../lib/meow-camera";
import MText from "../../UI/MText";
import CatHouseCard from "../CatHouseCard";
import styles from "./styles";

export default function CatHousesList({ catHouses, goBack = false }: { catHouses: CatHouse[], goBack?: boolean }) {
  return (
    <View style={styles.container}>
      {catHouses.map((theCatHouse: CatHouse) => (
        <CatHouseCard key={theCatHouse.id} catHouse={theCatHouse} goBack={goBack} />
      ))}
      {catHouses.length === 0 && (
        <MText style={styles.noCatHouses}>~ No cat houses available. ~</MText>
      )}
    </View>
  );
}
