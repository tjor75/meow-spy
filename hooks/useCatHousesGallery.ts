import { useContext } from "react";
import { CatHousesGalleryContext } from "../contexts/CatHousesGalleryContext";

export default function useCatHousesGallery() {
  const catHousesGalleryContext = useContext(CatHousesGalleryContext);
  return catHousesGalleryContext;
}
