import axios from "axios";

const BASE_URL = "https://api.meow.camera";

export interface CatHouse {
  id: string;
  name: string;
  englishName?: string;
  translatedName?: string;
}

export interface CatHouseDetails extends CatHouse {
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

export enum CatHouseType {
  FEATURED  = "featured", // Featured cameras
  RANDOM    = "random",   // Random cat houses with cats
  TOP       = "top"       // Popular cat houses
};

export interface MeowCameraError {
  status: string;
  message: string;
};


export const getCatHousesByType = async (type: CatHouseType): Promise<CatHouse[]> => {
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


export const getCatHousesByQuery = async (query: string): Promise<CatHouse[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/catHouses/search`, { query });
    return response.data;
  } catch (error) {
    console.error(`Error searching cat houses with query "${query}":`, error);
    throw error;
  }
}


export const getCatHouseDetailsById = async (catHouseId: string): Promise<CatHouseDetails | MeowCameraError | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/catHouse/${catHouseId}`);
    if (response.data.status)
      return response.data as MeowCameraError;
    else
      return { ...response.data, id: catHouseId } as CatHouseDetails;
  } catch (error) {
    console.error(`Error fetching cat house with ID ${catHouseId}:`, error);
    return null;
  }
}


export const getNameFromCatHouse = (catHouse: CatHouse): string => {
  return catHouse.englishName ?? catHouse.translatedName ?? catHouse.name;
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
