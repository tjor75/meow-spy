import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./ThemeContext";
import { CatHouseProvider } from "./CatHouseContext";
import { CatHousesGalleryProvider } from "./CatHousesGalleryContext";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <CatHouseProvider>
            <CatHousesGalleryProvider>
              {children}
            </CatHousesGalleryProvider>
          </CatHouseProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
