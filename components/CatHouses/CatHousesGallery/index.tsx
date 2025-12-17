import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { CatHouse } from "../../../lib/meow-camera";
import useTheme from "../../../hooks/useTheme";
import CatHousesList from "../CatHousesList";
import MText from "../../UI/MText";
import MButton from "../../UI/MButton";
import styles from "./styles";

type CatHousesGalleryProps = {
  title: string;
  catHouses: CatHouse[];
  loading?: boolean;
  buttons?: React.ReactNode;
  initialState?: boolean;
};

export default function CatHousesGallery({ title, catHouses, loading = true, buttons, initialState = false }: CatHousesGalleryProps) {
  const [state, setState] = useState<boolean>(initialState);
  const { theme } = useTheme();

  useEffect(() => {
    console.log(`CatHousesGallery "${title}" loading state changed:`, loading);
  }, [loading]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MButton onPress={() => setState(!state)} style={styles.titlePressable}>
          <Feather
            name={state ? "chevron-up" : "chevron-down"}
            size={16}
            color={theme.color}
          />
          <MText style={styles.titleContainer}>{title}</MText>
        </MButton>
        {buttons}
      </View>
      {state && (
        loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <CatHousesList catHouses={catHouses} />
        )
      )}
    </View>
  );
}
