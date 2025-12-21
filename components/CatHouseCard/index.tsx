import { useNavigation } from "@react-navigation/native";
import { CatHouse, getNameFromCatHouse } from "../../lib/meow-camera";
import useCatHouse from "../../hooks/useCatHouse";
import MButton from "../UI/MButton";
import MText from "../UI/MText";
import { globalColors } from "../../styles/globalColors";
import styles from "./styles";

type CatHouseCardProps = {
  catHouse: CatHouse;
  buttonStyle?: object;
  textStyle?: object;
  goBack?: boolean;
};

export default function CatHouseCard({ catHouse, buttonStyle, textStyle, goBack = false }: CatHouseCardProps) {
  const navigation = useNavigation();
  const { catHouseId, setCatHouseId } = useCatHouse();

  return (
    <MButton
      style={[styles.button, buttonStyle]}
      onPress={() => {
        setCatHouseId(catHouse.id)
        if (goBack) navigation.goBack();
      }}
      backgroundColor={catHouse.id === catHouseId ? globalColors.blue : undefined}
    >
      <MText
        style={[
          { flex: 1, flexShrink: 1 },
          catHouse.id === catHouseId ? { color: "#fff" } : undefined,
          textStyle,
        ]}
      >
        {getNameFromCatHouse(catHouse)}
      </MText>
      <MText
        style={[
          catHouse.id === catHouseId ? { color: "#fff" } : undefined,
          styles.idText,
        ]}
      >
        {catHouse.id}
      </MText>
    </MButton>
  );
}
