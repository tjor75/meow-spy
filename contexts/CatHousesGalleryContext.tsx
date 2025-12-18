import { createContext, useState, useEffect } from "react";
import { CatHouse, getCatHouseDetailsById } from "../lib/meow-camera";
import { getSavedCatHouses } from "../utils/cat-house";

type CatHousesGalleryContextType = {
  catHousesSaved: CatHouse[] | null;
  setCatHousesSaved: (catHouses: CatHouse[]) => void;

  featuredCatHousesState: [CatHouse[] | null, React.Dispatch<React.SetStateAction<CatHouse[] | null>>];
  randomCatHousesState: [CatHouse[] | null, React.Dispatch<React.SetStateAction<CatHouse[] | null>>];
  topCatHousesState: [CatHouse[] | null, React.Dispatch<React.SetStateAction<CatHouse[] | null>>];
};

export const CatHousesGalleryContext = createContext<CatHousesGalleryContextType>({
  catHousesSaved: null,
  setCatHousesSaved: () => {},

  featuredCatHousesState: [null, () => {}],
  randomCatHousesState: [null, () => {}],
  topCatHousesState: [null, () => {}],
});

export function CatHousesGalleryProvider({ children }: { children: React.ReactNode }) {
  const [catHousesSaved, setCatHousesSaved] = useState<CatHouse[] | null>(null);

  const featuredCatHousesState = useState<CatHouse[] | null>(null);
  const randomCatHousesState = useState<CatHouse[] | null>(null);
  const topCatHousesState = useState<CatHouse[] | null>(null);

  useEffect(() => {
    if (catHousesSaved === null)
      getSavedCatHouses().then(savedCatHouses => setCatHousesSaved(savedCatHouses));
    else
      setCatHousesSaved(catHousesSaved);
  }, [catHousesSaved]);

  return (
    <CatHousesGalleryContext.Provider value={{
      catHousesSaved,
      setCatHousesSaved,

      featuredCatHousesState,
      randomCatHousesState,
      topCatHousesState,
    }}>
      {children}
    </CatHousesGalleryContext.Provider>
  );
}
