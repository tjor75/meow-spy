import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { getOrientationLockAsync, OrientationLock } from "expo-screen-orientation";
import { CatHouseType } from "../../lib/meow-camera";
import useTheme from "../../hooks/useTheme";
import Header from "../../components/Header";
import CameraPlayerExpo from "../../components/UI/CameraPlayerExpo";
import CatHouseInfo from "../../components/CatHouseInfo";
import CatHousesSaved from "../../components/CatHouses/CatHousesSaved";
import CatHousesType from "../../components/CatHouses/CatHousesType";
import styles from "./styles";

export default function HomeScreen() {
  const [orientationLock, setOrientationLock] = useState<OrientationLock>(OrientationLock.PORTRAIT);
  const { theme } = useTheme();

  useEffect(() => {
    getOrientationLockAsync().then(result => setOrientationLock(result));
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Header />
      <CameraPlayerExpo orientationLock={orientationLock} />
      <ScrollView style={styles.sidebar}>
        <CatHouseInfo />
        <CatHousesSaved />
        <CatHousesType title="Featured"  type={CatHouseType.FEATURED} />
        <CatHousesType title="Random"    type={CatHouseType.RANDOM} />
        <CatHousesType title="Popular"   type={CatHouseType.TOP} />
      </ScrollView>
    </View>
  );
}
