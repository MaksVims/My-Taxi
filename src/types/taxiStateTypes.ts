
export interface TLocation {
  lat: number,
  lng: number
}

export interface TGeoPosition  {
  address: string,
  location: TLocation
}

export interface TTaxiState {
  userPlaceLocation: TLocation,
  currentLocation: TLocation,
  from: TGeoPosition,
  to: TGeoPosition,
  travelTime: number,
  travelDistance: number,
  selectedOption: string
}