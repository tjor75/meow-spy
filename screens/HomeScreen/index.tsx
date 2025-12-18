import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { CatHouseType } from "../../lib/meow-camera";
import useOrientationLock from "../../hooks/useOrientationLock";
import useTheme from "../../hooks/useTheme";
import useCatHousesGallery from "../../hooks/useCatHousesGallery";
import Header from "../../components/UI/Header";
import MText from "../../components/UI/MText";
import CameraPlayerExpo from "../../components/UI/CameraPlayerExpo";
import CatHouseInfo from "../../components/CatHouseInfo";
import CatHousesSaved from "../../components/CatHouses/CatHousesSaved";
import CatHousesType from "../../components/CatHouses/CatHousesType";
import styles from "./styles";

export default function HomeScreen() {
  const isLandscape = useOrientationLock();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { featuredCatHousesState, randomCatHousesState, topCatHousesState } = useCatHousesGallery();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <Header>
        <MText style={[styles.headerText, { color: theme.color }]}>Meow Spy</MText>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Feather name="search" size={24} color={theme.color} />
          </TouchableOpacity>
        </View>
      </Header>
      <View style={isLandscape ? styles.containerLandscape : styles.containerPortrait}>
        <View style={isLandscape ? styles.cameraLandscape : { flex: 1 }}>
          <CameraPlayerExpo isLandscape={isLandscape} />
        </View>
        <ScrollView style={[
          styles.sidebar,
          isLandscape ? styles.sidebarLandscape : styles.sidebarPortrait
        ]}>
          <CatHouseInfo />
          <CatHousesSaved />
          <CatHousesType
            title="Featured"
            type={CatHouseType.FEATURED}
            reactState={featuredCatHousesState}
          />
          <CatHousesType
            title="Random"
            type={CatHouseType.RANDOM}
            reactState={randomCatHousesState}
          />
          <CatHousesType
            title="Popular"
            type={CatHouseType.TOP}
            reactState={topCatHousesState}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
