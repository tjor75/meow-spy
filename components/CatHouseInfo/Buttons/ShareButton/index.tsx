import { useState } from "react";
import { Linking, Share } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getNameFromCatHouse } from "../../../../lib/meow-camera";
import useCatHouse from "../../../../hooks/useCatHouse";
import useTheme from "../../../../hooks/useTheme";
import MButton from "../../../UI/MButton";
import MModal from "../../../UI/MModal";
import MText from "../../../UI/MText";
import Divider from "../../../UI/Divider";
import { globalColors } from "../../../../styles/globalColors";
import styles from "./styles";

export default function ShareButton() {
  const { catHouseId, catHouseDetails } = useCatHouse();
  if (!catHouseId || !catHouseDetails) return;

  const { theme } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const openPurrrr = () => {
    const url = `hellopurrrr://hellobike.com/pet/secondflow?cathouseId=${catHouseId}`;
    console.log("Opening Purrrr URL:", url);
    Linking.openURL(url);
    toggleModal();
  };

  const openJieMao = () => {
    const url = `hellopetlinkshare://?autoJump=1&blockType=1&shareType=3&scene=2006&_sdk_=umeng&businessId=${catHouseId}`;
    console.log("Opening JieMao URL:", url);
    Linking.openURL(url);
    toggleModal();
  };

  const openMeowCamera = () => {
    const url = `https://meow.camera/#${catHouseId}`;
    console.log("Opening Meow.camera URL:", url);
    Linking.openURL(url);
    toggleModal();
  };

  const shareLink = () => {
    const url = `https://meow.camera/#${catHouseId}`;
    console.log("Sharing link:", url);
    Share.share({
      message: `${getNameFromCatHouse(catHouseDetails)} - Watch the cat house live! ${url}`,
      url: url,
    });
    toggleModal();
  }

  return (
    <>
      <MModal visible={modalVisible} setVisible={setModalVisible}>
        <MText style={{ color: theme.color }}>Open with the originals</MText>
        <MText style={{ color: theme.color, fontSize: 14 }}>Feed the cats and unlock more features</MText>
        <MButton style={styles.jmpButton} onPress={openPurrrr}>
          <MText style={styles.jmpText}>Open in Purrrr</MText>
        </MButton>
        <MButton style={styles.jmpButton} onPress={openJieMao}>
          <MText style={styles.jmpText}>Open in JieMao</MText>
        </MButton>
        <Divider />
        <MButton style={styles.meowCameraButton} onPress={openMeowCamera}>
          <MText style={styles.meowCameraText}>Open in Meow.camera</MText>
        </MButton>
        <MButton onPress={shareLink}>
          <Feather name="share-2" size={20} color={theme.color} />
          <MText>Share link</MText>
        </MButton>
        <Divider />
        <MButton onPress={toggleModal}>
          <MText>Cancel</MText>
        </MButton>
      </MModal>
      <MButton
        onPress={toggleModal}
        backgroundColor={globalColors.yellow}
        squared={true}
      >
        <Feather name="share" size={20} color={globalColors.black} />
      </MButton>
    </>
  );
}
