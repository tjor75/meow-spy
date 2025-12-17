import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { CatHouse } from "../../../lib/meow-camera";
import useTheme from "../../../hooks/useTheme";
import MButton from "../../UI/MButton";
import CatHousesGallery from "../CatHousesGallery";

type RemoteCatHousesGalleryProps = {
  title: string;
  catHousesGetter: () => Promise<CatHouse[]>;
  initialState?: boolean;
};

export default function RemoteCatHousesGallery({ title, catHousesGetter, initialState = false }: RemoteCatHousesGalleryProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [catHouses, setCatHouses] = useState<CatHouse[]>([]);
  const { theme } = useTheme();

  const fetchCatHouses = async () => {
    // if (state && !loading) {
    if (!loading) {
      setLoading(true);
      const newCatHouses = await catHousesGetter();
      console.log(`Fetched ${newCatHouses.length} cat houses for "${title}"`);
      console.log(newCatHouses);
      setCatHouses(newCatHouses);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatHouses();
  }, []);

  return (
    <CatHousesGallery
      title={title}
      catHouses={catHouses}
      loading={loading}
      buttons={(
        <MButton disabled={loading} onPress={fetchCatHouses}>
          <Feather name="refresh-ccw" size={20} color={theme.color} />
        </MButton>
      )}
      initialState={initialState}
    />
  );
}
