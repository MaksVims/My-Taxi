
export type TLocation = {
  lat: number,
  lng: number
}

export type TGeoPosition = {
  address: string,
  location: TLocation
}

export type TTaxiState = {
  userPlaceLocation: TLocation,
  currentLocation: TLocation,
  from: TGeoPosition,
  to: TGeoPosition,
  tripTime: number,
  tripDistance: number
}