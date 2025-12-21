import { useEffect, useState } from "react";
import { useEvent } from "expo";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useVideoPlayer, VideoView } from "expo-video";
import { getCameraUrl } from "../../../lib/street-cat-pull";
import useCatHouse from "../../../hooks/useCatHouse";
import MText from "../MText";
import styles from "./styles";

export default function CameraPlayerExpo({ isLandscape }: { isLandscape: boolean }) {
  const { catHouseId, catHouseDetails, camera, error, setError } = useCatHouse();
  const player = useVideoPlayer(null);

  console.log("Rendering CameraPlayerExpo with catHouseId:", catHouseId, "camera:", camera);

  const [loading, setLoading] = useState<boolean>(true);
  const { status, error: vidError } = useEvent(player, "statusChange", { status: player.status });

  const cameraUrl = getCameraUrl(catHouseId, camera);

  const loadVideo = () => {
    if (!catHouseDetails) return;
    setError(null);
    player.replaceAsync(cameraUrl)
      .then(() => {
        player.play();
        console.log("Video loaded:", cameraUrl)
      });
  };

  useEffect(() => loadVideo, [cameraUrl]);

  useEffect(() => {
    console.log("Player status changed:", status, vidError);
    setLoading(status === "idle" || status === "loading");
  }, [status]);

  useEffect(() => {
    if (!vidError) return;
    setError(null);
    console.log("Video player error:", vidError);

    /* if (vidError.message.includes("unexpected end of stream")) {
      loadVideo();
      return;
    } */

    setError(vidError.message);
  }, [vidError]);

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
        startsPictureInPictureAutomatically={true}
        requiresLinearPlayback={true}
      />
      {error ? (
        <TouchableOpacity onPress={loadVideo} style={styles.overlay}>
          {catHouseDetails && (
            <Feather name="refresh-ccw" size={24} color="white" />
          )}
          <MText style={styles.errorText}>{error}</MText>
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
