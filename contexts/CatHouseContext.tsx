import { createContext, useState, useEffect } from "react";
import { CatHouseDetails } from "../lib/meow-camera";
import { Camera } from "../lib/street-cat-pull";
import { getLastCatHouseId } from "../utils/cat-house";

type CatHouseContextType = {
  catHouseId: string;
  setCatHouseId: (catHouseId: string) => void;
  catHouseDetails: CatHouseDetails | null;
  setCatHouseDetails: (catHouse: CatHouseDetails | null) => void;
  camera: Camera;
  setCamera: (camera: Camera) => void;
  error: string | null;
  setError: (error: string | null) => void;
  reloadTrigger: boolean;
  reload: () => void;
};

export const CatHouseContext = createContext<CatHouseContextType>({
  catHouseId: "",
  setCatHouseId: () => {},
  catHouseDetails: null,
  setCatHouseDetails: () => {},
  camera: Camera.FRONT,
  setCamera: () => {},
  error: null,
  setError: () => {},
  reloadTrigger: false,
  reload: () => {},
});

export function CatHouseProvider({ children }: { children: React.ReactNode }) {
  const [catHouseId, setCatHouseId] = useState<string>("");
  const [catHouseDetails, setCatHouseDetails] = useState<CatHouseDetails | null>(null);
  const [camera, setCamera] = useState<Camera>(Camera.FRONT);
  const [error, setError] = useState<string | null>(null);
  const [reloadTrigger, setReloadTrigger] = useState<boolean>(false);

  useEffect(() => {
    getLastCatHouseId().then(lastCatHouseId => setCatHouseId(lastCatHouseId));
  }, []);

  const reload = () => {
    setReloadTrigger(prev => !prev);
  };

  return (
    <CatHouseContext.Provider value={{
      catHouseId,
      setCatHouseId,
      catHouseDetails,
      setCatHouseDetails,
      camera,
      setCamera,
      error,
      setError,
      reloadTrigger,
      reload,
    }}>
      {children}
    </CatHouseContext.Provider>
  );
}
