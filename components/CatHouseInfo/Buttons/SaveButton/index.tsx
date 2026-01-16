import { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import useCatHouse from "../../../../hooks/useCatHouse";
import useTheme from "../../../../hooks/useTheme";
import useCatHousesGallery from "../../../../hooks/useCatHousesGallery";
import MButton from "../../../UI/MButton";
import { globalColors } from "../../../../styles/globalColors";

export default function SaveButton() {
  const { catHouseId, catHouseDetails } = useCatHouse();
  const { catHousesSaved, setCatHousesSaved } = useCatHousesGallery();

  if (!(catHouseDetails && catHousesSaved)) return;

  const { theme } = useTheme();
  const isSaved = catHousesSaved.some(ch => ch.id === catHouseId);

  const toggleSaved = () => {
    if (isSaved)
      setCatHousesSaved(catHousesSaved.filter(ch => ch.id !== catHouseId));
    else
      setCatHousesSaved([...catHousesSaved, catHouseDetails]);
  };

  return (
    <MButton
      onPress={toggleSaved}
      backgroundColor={isSaved ? globalColors.yellow : undefined}
      squared={true}
    >
      <Feather name="star" size={20} color={isSaved ? globalColors.black : theme.color} />
    </MButton>
  );
}
