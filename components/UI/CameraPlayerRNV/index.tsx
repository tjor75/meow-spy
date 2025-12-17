import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import Video, { OnVideoErrorData, VideoRef } from "react-native-video";
import { Feather } from "@expo/vector-icons";
import { OrientationLock } from "expo-screen-orientation";
import { getCameraUrl } from "../../../lib/street-cat-pull";
import useCatHouse from "../../../hooks/useCatHouse";
import MText from "../MText";
import styles from "./styles";

export default function CameraPlayerRNV({ orientationLock }: { orientationLock: OrientationLock }) {
  const { catHouseId, catHouseDetails, camera } = useCatHouse();
  const videoRef = useRef<VideoRef>(null);
  const cameraUrl = getCameraUrl(catHouseId, camera);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<OnVideoErrorData | null>(null);

  console.log("Camera URL:", cameraUrl);

  useEffect(() => {
    setError(null);
    loadVideo();
  }, [cameraUrl]);

  const onBuffer = (e: { isBuffering: boolean }) => setLoading(e.isBuffering);

  const onError = (e: OnVideoErrorData) => {
    console.error("Video Error:", e);
    setError(e);
  };

  const loadVideo = () => videoRef.current?.setSource({ uri: cameraUrl });

  const isLandscape = orientationLock >= OrientationLock.LANDSCAPE && orientationLock <= OrientationLock.LANDSCAPE_RIGHT;

  return (
    <View style={[
      styles.cameraContainer,
      isLandscape ? styles.cameraContainerLandscape : styles.cameraContainerPortrait
    ]}>
      {catHouseDetails && (
        <Video
          // source={{ uri: cameraUrl }}
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          poster={
            catHouseDetails.images.length !== 0
              ? { source: { uri: catHouseDetails.images[0] }, resizeMode: "cover" }
              : undefined
          }
          style={styles.cameraPlayer}
          enterPictureInPictureOnLeave={true}

          controls={true}
          controlsStyles={{
            hideNext: true,
            hidePrevious: true,
            hideDuration: true,
            hideSettingButton: true,
          }}

          debug={{ enable: true }}
        />
      )}
      {error ? (
        <TouchableOpacity onPress={loadVideo} style={styles.overlay}>
          <Feather name="refresh-ccw" size={24} color="white" />
          <MText style={styles.errorText}>{`Error code: ${error.error.code}`}</MText>
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
