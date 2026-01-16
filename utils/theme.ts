import { Appearance, ColorSchemeName } from "react-native";
import * as storage from "./storage";

export const resolveColorScheme = (): ColorSchemeName => {
  return Appearance.getColorScheme() ?? "dark";
};

export const resolveTheme = (pref: ColorSchemeName): ColorSchemeName => {
  return pref ?? resolveColorScheme();
};

export const getThemePreference = async (): Promise<ColorSchemeName> => {
  return await storage.getData("themePreference") as ColorSchemeName || null;
};

export const storeThemePreference = async (preference: ColorSchemeName): Promise<void> => {
  await storage.setData("themePreference", preference ?? "");
};
