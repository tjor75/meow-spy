import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { CatHouse } from "../../../lib/meow-camera";
import useTheme from "../../../hooks/useTheme";
import MButton from "../../UI/MButton";
import CatHousesGallery from "../CatHousesGallery";

type RemoteCatHousesGalleryProps = {
  title: string;
  catHousesGetter: () => Promise<CatHouse[]>;
  reactState: [CatHouse[] | null, React.Dispatch<React.SetStateAction<CatHouse[] | null>>];
  initialState?: boolean;
};

export default function RemoteCatHousesGallery({ title, catHousesGetter, reactState, initialState = false }: RemoteCatHousesGalleryProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [catHouses, setCatHouses] = reactState;
  const { theme } = useTheme();

  const fetchCatHouses = async () => {
    // if (state && !loading) {
    if (!loading) {
      setLoading(true);
      const newCatHouses = await catHousesGetter();
      console.log(`Fetched ${newCatHouses.length} cat houses for "${title}"`);
      setCatHouses(newCatHouses);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (catHouses === null)
      fetchCatHouses();
  }, []);

  if (catHouses)
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
