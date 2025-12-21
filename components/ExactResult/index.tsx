import { View } from "react-native";
import { CatHouse } from "../../lib/meow-camera";
import MText from "../UI/MText";
import CatHouseCard from "../CatHouseCard";
import styles from "./styles";

export default function ExactResult({ catHouse }: { catHouse?: CatHouse }) {
  if (catHouse)
    return (
      <View style={styles.container}>
        <MText style={styles.header}>Exact match found</MText>
        <CatHouseCard
          catHouse={catHouse}
          textStyle={styles.text}
          goBack={true}
        />
      </View>
    );
}
