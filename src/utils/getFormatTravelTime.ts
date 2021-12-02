export function getFormatTravelTime(min: number): string {
  if (min < 60) return `${min} мин.`

  return `${min} мин. (${Math.round(min / 60)} ч.)`
}