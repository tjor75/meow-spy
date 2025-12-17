import useCatHouse from "../../../hooks/useCatHouse";
import CatHousesGallery from "../CatHousesGallery";

export default function CatHousesSaved() {
  const { catHousesSaved } = useCatHouse();

  return (
    <CatHousesGallery
      title="Saved"
      catHouses={catHousesSaved || []}
      loading={catHousesSaved === null}
      initialState={true}
    />
  );
}
