import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default function useOrientation() {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  // Helper to check if an orientation value is landscape
  const checkIsLandscape = (orientation: ScreenOrientation.Orientation) => {
    return (
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    );
  };

  useEffect(() => {
    // 1. Get initial physical orientation
    const checkInitialOrientation = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setIsLandscape(checkIsLandscape(currentOrientation));
    };

    checkInitialOrientation();

    // 2. Subscribe to physical orientation changes
    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      // event.orientationInfo contains the actual physical state
      const { orientation } = event.orientationInfo;
      setIsLandscape(checkIsLandscape(orientation));
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return isLandscape;
}
