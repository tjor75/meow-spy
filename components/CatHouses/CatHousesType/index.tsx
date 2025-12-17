import { CatHouseType, getCatHousesByType } from "../../../lib/meow-camera";
import RemoteCatHousesGallery from "../RemoteCatHousesGallery";

type CatHousesTypeProps = {
  title: string;
  type: CatHouseType;
};

export default function CatHousesType({ title, type }: CatHousesTypeProps) {
  return (
    <RemoteCatHousesGallery
      title={title}
      catHousesGetter={() => getCatHousesByType(type)}
    />
  );
}
