import { useEffect, useState } from "react";
import { useEvent } from "expo";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useVideoPlayer, VideoSource, VideoView } from "expo-video";
import MText from "../MText";
import styles from "./styles";
import { globalColors } from "../../../styles/globalColors";

interface MPlayerProps {
  source: VideoSource;
  thumbnail?: string;
}

export default function MPlayer({ source, thumbnail }: MPlayerProps) {
  const player = useVideoPlayer(null);

  const [playerError, setPlayerError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const { status, error } = useEvent(player, "statusChange", {
    status: player.status,
  });

  const loadVideo = async () => {
    setLoading(true);
    if (!source) {
      setPlayerError("No source loaded");
      setLoading(false);
      return;
    }
    setPlayerError(undefined);
    try {
      await player.replaceAsync(source);
      player.play();
      console.log("Video loaded:", source);
    } catch (e: any) {
      console.log("Failed to load video:", e?.message ?? e);
      setPlayerError("Failed to load video");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (source) loadVideo();
  }, [source]);

  useEffect(() => {
    if (!error) return;
    // setError(null);
    // console.log("Video player error:", vidError);
    //
    // if (vidError.message.includes("unexpected end of stream")) {
    //   loadVideo();
    //   return;
    // }

    console.error("Video player error:", error);
    setPlayerError(error?.message);
  }, [error]);

  useEffect(() => {
    console.log("Player status changed:", status, playerError);
    setLoading(status === "idle" || status === "loading");
  }, [status]);

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.videoView}
        player={player}
        fullscreenOptions={{
          enable: true,
        }}
        allowsPictureInPicture={true}
        startsPictureInPictureAutomatically={true}
      />
      {playerError && (
        <TouchableOpacity onPress={loadVideo} style={styles.overlay}>
          <Feather name="refresh-ccw" size={24} color={globalColors.white} />
          <MText style={styles.playerErrorText}>{playerError}</MText>
        </TouchableOpacity>
      )}
      {loading && (
        <>
          {thumbnail && (
            <View style={styles.overlay}>
              <Image
                source={{ uri: thumbnail }}
                style={styles.thumbnail}
                resizeMode="cover"
              />
            </View>
          )}
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color={globalColors.white} />
          </View>
        </>
      )}
    </View>
  );
}
