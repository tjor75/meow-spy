import { createContext, useState, useEffect } from "react";
import { CatHouse, CatHouseDetails, getCatHouseDetailsById } from "../lib/meow-camera";
import { Camera } from "../lib/street-cat-pull";
import { getLastCatHouseId, getSavedCatHouses } from "../utils/cat-house";

type CatHouseContextType = {
  catHouseId: string;
  setCatHouseId: (catHouseId: string) => void;
  catHouseDetails: CatHouseDetails | null;
  setCatHouseDetails: (catHouse: CatHouseDetails | null) => void;
  catHousesSaved: CatHouse[] | null;
  setCatHousesSaved: (catHouses: CatHouse[]) => void;
  camera: Camera;
  setCamera: (camera: Camera) => void;
};

export const CatHouseContext = createContext<CatHouseContextType>({
  catHouseId: "",
  setCatHouseId: () => {},
  catHouseDetails: null,
  setCatHouseDetails: () => {},
  catHousesSaved: null,
  setCatHousesSaved: () => {},
  camera: Camera.FRONT,
  setCamera: () => {},
});

export function CatHouseProvider({ children }: { children: React.ReactNode }) {
  const [catHouseId, setCatHouseId] = useState<string>("");
  const [catHouseDetails, setCatHouseDetails] = useState<CatHouseDetails | null>(null);
  const [catHousesSaved, setCatHousesSaved] = useState<CatHouse[] | null>(null);
  const [camera, setCamera] = useState<Camera>(Camera.FRONT);

  const reloadDetails = async () => {
    if (catHouseId) {
      const details = await getCatHouseDetailsById(catHouseId);
      setCatHouseDetails(details);
    }
  };

  useEffect(() => {
    getLastCatHouseId().then(lastCatHouseId => setCatHouseId(lastCatHouseId));
  }, []);

  useEffect(() => {
    if (catHouseId === "") return;

    let interval: NodeJS.Timeout | null = null;

    if (catHouseId) {
      setCamera(Camera.FRONT);
      reloadDetails();
      interval = setInterval(reloadDetails, 60000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [catHouseId]);

  useEffect(() => {
    if (catHousesSaved === null)
      getSavedCatHouses().then(savedCatHouses => setCatHousesSaved(savedCatHouses));
    else
      setCatHousesSaved(catHousesSaved);
  }, [catHousesSaved]);

  return (
    <CatHouseContext.Provider value={{
      catHouseId,
      setCatHouseId,
      catHouseDetails,
      setCatHouseDetails,
      catHousesSaved,
      setCatHousesSaved,
      camera,
      setCamera
    }}>
      {children}
    </CatHouseContext.Provider>
  );
}
