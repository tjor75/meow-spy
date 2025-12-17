import { CatHouseDetails } from "../../../lib/meow-camera";
import IconDetail from "../../UI/IconDetail";

export default function Viewers({ catHouseDetails }: { catHouseDetails: CatHouseDetails }) {
  const count = Object.values(catHouseDetails.viewers).reduce((a, b) => a + b, 0);

  return (
    <IconDetail icon="eye" detail={String(count)} />
  );
}
