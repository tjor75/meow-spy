import { View } from "react-native";
import { getNameFromCatHouse } from "../../lib/meow-camera";
import useCatHouse from "../../hooks/useCatHouse";
import CameraChanger from "../UI/CameraChanger";
import MText from "../UI/MText";
import LocalizedCurrentTime from "./LocalizedCurrentTime";
import Viewers from "./Viewers";
import FoodLevels from "./FoodLevels";
import SavedButton from "../UI/SavedButton";
import styles from "./styles";

export default function CatHouseInfo() {
  const { catHouseDetails } = useCatHouse();

  if (catHouseDetails)
    return (
      <View>
        <View style={styles.row}>
          <MText style={styles.name}>{getNameFromCatHouse(catHouseDetails)}</MText>
          <SavedButton catHouseDetails={catHouseDetails} />
        </View>
        <View style={styles.row}>
          <LocalizedCurrentTime timeZone={catHouseDetails.timeZone} />
          <View style={styles.rowRight}>
            <FoodLevels catHouseDetails={catHouseDetails} />
            <Viewers catHouseDetails={catHouseDetails} />
          </View>
        </View>
        <CameraChanger />
      </View>
    );
}
