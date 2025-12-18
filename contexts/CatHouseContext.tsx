import { createContext, useState, useEffect } from "react";
import { CatHouseDetails, getCatHouseDetailsById } from "../lib/meow-camera";
import { Camera } from "../lib/street-cat-pull";
import { getLastCatHouseId, setLastCatHouseId } from "../utils/cat-house";

type CatHouseContextType = {
  catHouseId: string;
  setCatHouseId: (catHouseId: string) => void;
  catHouseDetails: CatHouseDetails | null;
  setCatHouseDetails: (catHouse: CatHouseDetails | null) => void;
  camera: Camera;
  setCamera: (camera: Camera) => void;
  error: string | null;
  setError: (error: string | null) => void;
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
});

export function CatHouseProvider({ children }: { children: React.ReactNode }) {
  const [catHouseId, setCatHouseId] = useState<string>("");
  const [catHouseDetails, setCatHouseDetails] = useState<CatHouseDetails | null>(null);
  const [camera, setCamera] = useState<Camera>(Camera.FRONT);
  const [error, setError] = useState<string | null>(null);

  const reloadDetails = async () => {
    if (catHouseId) {
      const details = await getCatHouseDetailsById(catHouseId);

      if (!details) {
        setError("Failed to fetch cat house details.");
        setCatHouseDetails(null);
        return;
      }

      if (details && 'status' in details) {
        setError(details.message);
        setCatHouseDetails(null);
        return;
      }

      setCatHouseDetails(details);
    }
  };

  useEffect(() => {
    getLastCatHouseId().then(lastCatHouseId => setCatHouseId(lastCatHouseId));
  }, []);

  useEffect(() => {
    if (catHouseId === "") return;

    let interval: NodeJS.Timeout | null = null;

    setError(null);

    if (catHouseId) {
      setCamera(Camera.FRONT);
      setLastCatHouseId(catHouseId);
      reloadDetails();
      interval = setInterval(reloadDetails, 60000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [catHouseId]);

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
    }}>
      {children}
    </CatHouseContext.Provider>
  );
}
