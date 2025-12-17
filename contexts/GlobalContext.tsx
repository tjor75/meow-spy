import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./ThemeContext";
import { CatHouseProvider } from "./CatHouseContext";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <CatHouseProvider>
            {children}
          </CatHouseProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
