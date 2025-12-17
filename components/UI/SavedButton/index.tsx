import { Feather } from "@expo/vector-icons";
import { createCatHouseFromDetails } from "../../../utils/cat-house";
import useCatHouse from "../../../hooks/useCatHouse";
import useTheme from "../../../hooks/useTheme";
import MButton from "../MButton";
import { globalColors } from "../../../styles/globalColors";

export default function SavedButton() {
  const { catHouseId, catHouseDetails, catHousesSaved, setCatHousesSaved } = useCatHouse();
  if (!catHouseDetails) return;

  const { theme } = useTheme();
  const isSaved = catHousesSaved?.some(ch => ch.id === catHouseId);

  const toggleSaved = () => {
    if (isSaved) {
      setCatHousesSaved(catHousesSaved?.filter(ch => ch.id !== catHouseId) || []);
    } else {
      const newCatHousesSaved = [...(catHousesSaved || []), createCatHouseFromDetails(catHouseId, catHouseDetails)];
      setCatHousesSaved(newCatHousesSaved);
    }
  };

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
