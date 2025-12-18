import useCatHousesGallery from "../../../hooks/useCatHousesGallery";
import CatHousesGallery from "../CatHousesGallery";

export default function CatHousesSaved() {
  const { catHousesSaved } = useCatHousesGallery();

  return (
    <CatHousesGallery
      title="Saved"
      catHouses={catHousesSaved || []}
      loading={catHousesSaved === null}
      initialState={true}
    />
  );
}
