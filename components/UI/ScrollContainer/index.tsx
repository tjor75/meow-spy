import { ScrollView } from "react-native";
import styles from "./styles";

export default function ScrollContainer({ ...props }: React.ComponentProps<typeof ScrollView>) {
  return (
    <ScrollView
      {...props}
      style={[styles.container, props.style]}
      contentContainerStyle={[styles.contentContainer, props.contentContainerStyle]}
    >
      {props.children}
    </ScrollView>
  );
}
