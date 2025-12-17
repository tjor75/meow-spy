import { useContext } from "react";
import { CatHouseContext } from "../contexts/CatHouseContext";
import { getCatHouseDetailsById } from "../lib/meow-camera";
import { Camera } from "../lib/street-cat-pull";

export default function useCatHouse() {
  const catHouseContext = useContext(CatHouseContext);

  const setCatHouseDetailsById = async (catHouseId: string) => {
    const newCatHouseDetails = await getCatHouseDetailsById(catHouseId);
    catHouseContext.setCatHouseDetails(newCatHouseDetails);

    if (catHouseContext.camera !== Camera.FRONT)
      catHouseContext.setCamera(Camera.FRONT);
  };

  return {
    setCatHouseDetailsById,
    ...catHouseContext,
  };
}
