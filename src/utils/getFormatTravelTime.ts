export function getFormatTravelTime(min: number): string {
  if (min < 0) return '0 мин.'
  if (min < 60 && min > 0) return `${min} мин.`

  return `${min} мин. (${Math.round(min / 60)} ч.)`
}