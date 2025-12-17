const convertToTimeZoneTime = (date: Date, timeZone: string): string => {
  return date.toLocaleString("en-US", { timeZone, hour: '2-digit', minute: '2-digit', hour12: false });
}

export const nowInTimeZone = (timeZone: string): string => {
  const now = new Date();
  return convertToTimeZoneTime(now, timeZone);
}
