import { useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import useCatHouse from "../../../hooks/useCatHouse";
import MText from "../MText";
import styles from "./styles";

export default function NoInternetBanner() {
  const { reload } = useCatHouse();
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected) reload();
  }, [netInfo]);

  if (netInfo.isConnected) return null;

  return (
    <MText style={styles.text}>
      Connection lost.
    </MText>
  );
}
