import { CatHouseDetails } from "../../../lib/meow-camera"
import IconDetail from "../../UI/IconDetail"

export default function FoodLevels({ catHouseDetails }: { catHouseDetails: CatHouseDetails }) {
  return (
    <>
      {catHouseDetails.stock.kibble && (
        <IconDetail icon="speaker" detail={String(catHouseDetails.stock.kibble)} />
      )}
      {catHouseDetails.stock.snack && (
        <IconDetail icon="coffee" detail={String(catHouseDetails.stock.snack)} />
      )}
    </>
  );
}
