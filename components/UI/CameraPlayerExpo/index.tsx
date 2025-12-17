import { useEffect, useState } from "react";
import { useEvent } from "expo";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useVideoPlayer, VideoView } from "expo-video";
import { OrientationLock } from "expo-screen-orientation";
import { getCameraUrl } from "../../../lib/street-cat-pull";
import useCatHouse from "../../../hooks/useCatHouse";
import MText from "../MText";
import styles from "./styles";

export default function CameraPlayerExpo({ orientationLock }: { orientationLock: OrientationLock }) {
  const { catHouseId, catHouseDetails, camera } = useCatHouse();
  const player = useVideoPlayer(null);

  const cameraUrl = getCameraUrl(catHouseId, camera);
  console.log("Camera URL:", cameraUrl);

  const [loading, setLoading] = useState<boolean>(true);
  const { status, error } = useEvent(player, "statusChange", { status: player.status });

  const isLandscape =
    orientationLock >= OrientationLock.LANDSCAPE &&
    orientationLock <= OrientationLock.LANDSCAPE_RIGHT;

  const loadVideo = () => {
    player.replace(cameraUrl);
    player.play();
  };

  useEffect(loadVideo, [cameraUrl]);

  useEffect(() => {
    console.log("Player status changed:", status, error);
    setLoading(status === "idle" || status === "loading");
  }, [status]);

  return (
    <View style={[
      styles.cameraContainer,
      isLandscape ? styles.cameraContainerLandscape : styles.cameraContainerPortrait
    ]}>
      <VideoView
        style={styles.cameraPlayer}
        player={player}
        allowsFullscreen={true}
        allowsPictureInPicture={true}
      />
      {error ? (
        <TouchableOpacity onPress={loadVideo} style={styles.overlay}>
          <Feather name="refresh-ccw" size={24} color="white" />
          <MText style={styles.errorText}>{`Error code: ${status.toString()}`}</MText>
          <MText style={styles.errorText}>Tap to retry.</MText>
        </TouchableOpacity>
      ) : (
        (catHouseDetails === null || loading) && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" />
          </View>
        )
      )}
    </View>
  );
}
