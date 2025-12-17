import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(`Error getting data for key "${key}":`, error);
    return null;
  }
};

export const setData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting data for key "${key}":`, error);
  }
};
