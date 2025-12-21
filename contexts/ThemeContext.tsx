import { createContext, useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";
import { getThemePreference, resolveColorScheme, resolveTheme } from "../utils/theme";
import { themeColors } from "../styles/themeColors";

export enum Theme {
  LIGHT = "light",
  DARK  = "dark",
}

type ThemeContextType = {
  themePreference: ColorSchemeName;
  setThemePreference: (preference: ColorSchemeName) => void;
  theme: any;
  colorScheme: any;
}

export const ThemeContext = createContext<ThemeContextType>({
  themePreference: null,
  setThemePreference: () => {},
  theme: {},
  colorScheme: {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themePreference, setThemePreference] = useState<ColorSchemeName>(null);
  const theme = resolveTheme(themePreference) === Theme.DARK ? themeColors.dark : themeColors.light;
  const colorScheme = resolveColorScheme() === Theme.DARK ? themeColors.dark : themeColors.light;

  console.log("Current theme preference:", themePreference);

  useEffect(() => {
    getThemePreference().then(oldThemePreference => setThemePreference(oldThemePreference));
  }, []);

  return (
    <ThemeContext.Provider value={{ themePreference, setThemePreference, theme, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
