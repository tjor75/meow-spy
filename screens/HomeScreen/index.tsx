import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { setLastCatHouseId } from "../../utils/cat-house";
import { Camera } from "../../lib/street-cat-pull";
import { CatHouseType, getCatHouseDetailsById } from "../../lib/meow-camera";
import useOrientationLock from "../../hooks/useOrientationLock";
import useTheme from "../../hooks/useTheme";
import useCatHouse from "../../hooks/useCatHouse";
import useCatHousesGallery from "../../hooks/useCatHousesGallery";
import Screen from "../../components/UI/Screen";
import ScrollContainer from "../../components/UI/ScrollContainer";
import Header from "../../components/Header";
import MText from "../../components/UI/MText";
import CameraPlayerExpo from "../../components/UI/CameraPlayerExpo";
import CatHouseInfo from "../../components/CatHouseInfo";
import CatHousesSaved from "../../components/CatHouses/CatHousesSaved";
import CatHousesType from "../../components/CatHouses/CatHousesType";
import styles from "./styles";


export default function HomeScreen() {
  const navigation = useNavigation();
  const isLandscape = useOrientationLock();
  const { theme } = useTheme();
  const { catHouseId, setCatHouseDetails, setCamera, setError, reloadTrigger } = useCatHouse();
  const { featuredCatHousesState, randomCatHousesState, topCatHousesState } = useCatHousesGallery();

  const reloadDetails = async () => {
    const details = await getCatHouseDetailsById(catHouseId);
  
    if (!details) {
      setError("Failed to fetch cat house details.");
      setCatHouseDetails(null);
      return;
    }
  
    if (details && 'status' in details) {
      setError(details.message);
      setCatHouseDetails(null);
      return;
    }
  
    setCatHouseDetails(details);
  };

  useEffect(() => {
    if (catHouseId === "") return;

    let interval: NodeJS.Timeout | null = null;

    setError(null);

    if (catHouseId) {
      setCamera(Camera.FRONT);
      setLastCatHouseId(catHouseId);
      reloadDetails();
      interval = setInterval(reloadDetails, 60000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [catHouseId, reloadTrigger]);

  return (
    <Screen>
      <Header style={{ justifyContent: 'space-between' }} goBack={false}>
        <MText style={styles.headerText}>Meow Spy</MText>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Feather name="search" size={24} color={theme.color} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Feather name="settings" size={24} color={theme.color} />
          </TouchableOpacity>
        </View>
      </Header>
      <View style={isLandscape ? styles.containerLandscape : styles.containerPortrait}>
        <CameraPlayerExpo isLandscape={isLandscape} />
        <ScrollContainer
          style={isLandscape ? styles.sidebarLandscape : undefined}
        >
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
        </ScrollContainer>
      </View>
    </Screen>
  );
}
