import { CatHouse, CatHouseType, getCatHousesByType } from "../../../lib/meow-camera";
import RemoteCatHousesGallery from "../RemoteCatHousesGallery";

type CatHousesTypeProps = {
  title: string;
  type: CatHouseType;
  reactState: [CatHouse[] | null, React.Dispatch<React.SetStateAction<CatHouse[] | null>>];
};

export default function CatHousesType({ title, type, reactState }: CatHousesTypeProps) {
  return (
    <RemoteCatHousesGallery
      title={title}
      catHousesGetter={() => getCatHousesByType(type)}
      reactState={reactState}
    />
  );
}
