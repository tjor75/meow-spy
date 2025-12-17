import { useEffect, useState } from "react";
import { nowInTimeZone } from "../../../utils/format";
import IconDetail from "../../UI/IconDetail";

export default function LocalizedCurrentTime({ timeZone }: { timeZone: string }) {
  const [currentTime, setCurrentTime] = useState(() => nowInTimeZone(timeZone));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(nowInTimeZone(timeZone));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timeZone]);

  return (
    <IconDetail icon="clock" detail={currentTime} />
  );
}
