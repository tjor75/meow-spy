import { View } from "react-native";
import { Camera } from "../../../lib/street-cat-pull";
import useCatHouse from "../../../hooks/useCatHouse";
import MButton from "../MButton";
import MText from "../MText";
import styles from "./styles";
import { globalColors } from "../../../styles/globalColors";

export default function CameraChanger() {
  const { camera, setCamera } = useCatHouse();

  return (
    <View style={styles.container}>
      { /* Sorry for this code :-( */ }
      {Object.keys(Camera).map((cameraKey) => {
        const cameraValue = Camera[cameraKey as keyof typeof Camera];

        if (!isNaN(Number(cameraKey))) return undefined;

        return (
          <MButton
            key={cameraKey}
            onPress={() => setCamera(cameraValue)}
            backgroundColor={cameraValue === camera ? globalColors.blue : undefined}
            style={styles.button}
          >
            <MText style={cameraValue === camera ? { color: "#fff" } : undefined}>
              {cameraKey}
            </MText>
          </MButton>
        );
      })}
    </View>
  );
}
