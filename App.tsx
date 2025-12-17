import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { GlobalProvider } from "./contexts/GlobalContext";
import useTheme from "./hooks/useTheme";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style="auto" />
      <GlobalProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </GlobalProvider>
    </>
  );
}
