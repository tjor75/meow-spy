const BASE_URL = "https://streetcatpull.hellobike.com";

export enum Camera {
  FRONT = 0,
  TOP = 1,
  BACK = 2
}

export const getCameraUrl = (catHouseId: string, camera: Camera): string => {
  return `${BASE_URL}/live/${catHouseId}_${camera}.m3u8`;
}
