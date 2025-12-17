import { createContext, useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";
import { getThemePreference, resolveTheme } from "../utils/theme";
import { themeColors } from "../styles/themeColors";

export enum Theme {
  LIGHT = "light",
  DARK  = "dark",
}

type ThemeContextType = {
  theme: any;
  themePreference: ColorSchemeName;
  setThemePreference: (preference: ColorSchemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: {},
  themePreference: null,
  setThemePreference: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themePreference, setThemePreference] = useState<ColorSchemeName>(null);
  const theme = resolveTheme(themePreference) === Theme.DARK ? themeColors.dark : themeColors.light;

  console.log("Current theme preference:", themePreference);

  useEffect(() => {
    getThemePreference().then(oldThemePreference => setThemePreference(oldThemePreference));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
