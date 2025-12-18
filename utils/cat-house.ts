import { CatHouse, CatHouseDetails } from "../lib/meow-camera";
import * as storage from "./storage";

export const getLastCatHouseId = async (): Promise<string> => {
  return await storage.getData("lastCatHouseId") ?? "4258783365322591678";
};

export const setLastCatHouseId = async (catHouseId: string): Promise<void> => {
  await storage.setData("lastCatHouseId", catHouseId);
};

export const getSavedCatHouses = async (): Promise<CatHouse[]> => {
  const data = await storage.getData("savedCatHouses");
  if (!data) return [];
  try {
    return JSON.parse(data) as CatHouse[];
  } catch {
    return [];
  }
};

export const setSavedCatHouses = async (catHouses: CatHouse[]): Promise<void> => {
  await storage.setData("savedCatHouses", JSON.stringify(catHouses));
};
