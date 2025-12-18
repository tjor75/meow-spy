import { View } from "react-native";
import { CatHouse } from "../../lib/meow-camera";
import MText from "../UI/MText";
import CatHouseCard from "../CatHouses/CatHouseCard";
import styles from "./styles";

export default function ExactResult({ catHouse = null }: { catHouse?: CatHouse }) {
  if (catHouse)
    return (
      <View style={styles.container}>
        <MText style={styles.headerStyle}>Exact match found</MText>
        <CatHouseCard
          catHouse={catHouse}
          textStyle={styles.textStyle}
          goBack={true}
        />
      </View>
    );
}
