import { Modal, TouchableOpacity, View } from "react-native";
import useTheme from "../../../hooks/useTheme";
import styles from "./styles";

type MModalProps = {
  children: React.ReactElement;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export default function MModal({ children, visible, setVisible }: MModalProps) {
  const { theme } = useTheme();
  const closeModal = () => { setVisible(false); };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <TouchableOpacity style={styles.backdrop} onPress={closeModal} activeOpacity={1}>
        <View style={[
          styles.container,
          { backgroundColor: theme.altBackground },
        ]}>
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
