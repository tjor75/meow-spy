import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { GlobalProvider } from "./contexts/GlobalProvider";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NoInternetBanner from "./components/UI/NoInternetBanner";

const Stack = createNativeStackNavigator();
ScreenOrientation.unlockAsync();

export default function App() {
  return (
    <GlobalProvider>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
      <NoInternetBanner />
    </GlobalProvider>
  );
}
