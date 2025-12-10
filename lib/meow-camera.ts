import axios from "axios";

const BASE_URL = "https://api.meow.camera";

interface CatHouse {
  id: string;
  name: string;
  englishName?: string;
  translatedName?: string;
}

interface CatHouseDetails extends CatHouse {
  images: string[];
  subscribeCount: number;
  todayFeedCount: number;
  todayShowCount: number;
  timeZone: string;
  catPresent: boolean;
  lightTurnedOn: boolean;
  deviceTemperatureCelsius: number;
  stock: {
    snack?: string;
    kibble?: string;
  },
  hasSnacks: boolean;
  viewers: {
    local: number;
    jiemao: number;
    purrrr: number;
  }
}


const getCatHouses = async (type: string): Promise<CatHouse[]> => {
  let catHouses: CatHouse[] = [];
  try {
    const response = await axios.get(`${BASE_URL}/catHouses/${type}`);
    catHouses = response.data;
  } catch (error) {
    console.error("Error fetching cat houses:", error);
  } finally {
    return catHouses;
  }
}

// Featured cameras
export const getFeaturedCameras = async (): Promise<CatHouse[]> => {
  return getCatHouses("featured");
}

// Random cat houses with cats
export const getRandomCatHouses = async (count: number): Promise<CatHouse[]> => {
  return getCatHouses("random");
}

// Popular cat houses
export const getPopularCatHouses = async (): Promise<CatHouse[]> => {
  return getCatHouses("popular");
}


export const searchCatHouses = async (query: string): Promise<CatHouse[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/catHouses/search`, { query });
    return response.data;
  } catch (error) {
    console.error(`Error searching cat houses with query "${query}":`, error);
    return [];
  }
}


export const getCatHouseById = async (catHouseId: string): Promise<CatHouseDetails | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/catHouse/${catHouseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cat house with ID ${catHouseId}:`, error);
    return null;
  }
}


export const pingCamera = async (catHouseId: string, camera: string): Promise<Boolean> => {
  try {
    const response = await axios.get(`${BASE_URL}/ping/${catHouseId}/${camera}`);
    return response.status === 200;
  } catch (error) {
    console.error(`Error pinging camera for cat house ID ${catHouseId}:`, error);
    return false;
  }
}
