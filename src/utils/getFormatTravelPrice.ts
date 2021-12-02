function calcTravelPrice(multiplier: number, minute: number): number {
  return multiplier * minute
}

export function getFormatTravelPrice(multiplier: number, minute: number): string {
  const price = calcTravelPrice(multiplier, minute)
  return Intl.NumberFormat('ru', {
    currency: 'rub',
    maximumFractionDigits: 0,
    style: 'currency'
  }).format(price)
}