import { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import useCatHouse from "../../../hooks/useCatHouse";
import useTheme from "../../../hooks/useTheme";
import useCatHousesGallery from "../../../hooks/useCatHousesGallery";
import MButton from "../MButton";
import { globalColors } from "../../../styles/globalColors";

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

  useEffect(() => {
    console.log(`Cat houses saved: ${catHousesSaved.map(ch => ch.id).join(", ")}`);
  }, [catHousesSaved]);

  return (
    <MButton
      onPress={toggleSaved}
      backgroundColor={isSaved ? globalColors.yellow : undefined}
      squared={true}
    >
      <Feather name="star" size={20} color={isSaved ? globalColors.white : theme.color} />
    </MButton>
  );
}
