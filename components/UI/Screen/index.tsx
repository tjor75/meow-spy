import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../../hooks/useTheme";

export default function Screen({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {children}
    </SafeAreaView>
  );
}
