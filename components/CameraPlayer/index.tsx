import { View } from "react-native";
import useCatHouse from "../../hooks/useCatHouse";
import { getCameraUrl } from "../../lib/street-cat-pull";
import MPlayer from "../UI/MPlayer";
import styles from "./styles";

interface CameraPlayerProps {
  isLandscape: boolean;
}

export default function CameraPlayer({ isLandscape }: CameraPlayerProps) {
  const {
    catHouseId,
    catHouseDetails,
    camera,
    error,
    setError,
    reloadTrigger,
  } = useCatHouse();

  console.log(
    "Rendering CameraPlayer with catHouseId:",
    catHouseId,
    "camera:",
    camera,
  );

  const cameraUrl = getCameraUrl(catHouseId, camera);
  const thumbnail = catHouseDetails?.images[0];

  return (
    <View
      style={[
        styles.container,
        isLandscape ? styles.containerLandscape : styles.containerPortrait,
      ]}
    >
      <MPlayer source={cameraUrl} thumbnail={thumbnail} />
    </View>
  );
}
