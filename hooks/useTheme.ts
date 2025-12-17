import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  const themeContext = useContext(ThemeContext);
  return themeContext;
}
