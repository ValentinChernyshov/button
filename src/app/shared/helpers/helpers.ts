export function transformSecondsToMinutes(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const remainingSeconds = seconds % 60;
  return `${formattedMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
