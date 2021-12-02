import {TGeoPosition, TLocation, TTaxiState} from "@/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TTaxiState = {
  from: {} as TGeoPosition,
  to: {} as TGeoPosition,
  currentLocation: {} as TLocation,
  userPlaceLocation: {} as TLocation,
  travelDistance: 0,
  travelTime: 0,
  selectedOption: ''
}

const taxiSlice = createSlice({
  name: 'taxi',
  initialState,
  reducers: {
    setFrom:(state, action) => {
      state.from = action.payload
    },
    setTo:(state, action) => {
      state.to = action.payload
    },
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload
    },
    setUserPlaceLocation:(state, action) => {
      state.userPlaceLocation = action.payload
    },
    setTravelDistance:(state, action) => {
      state.travelDistance = action.payload
    },
    setTravelTime:(state, action) => {
      state.travelTime = action.payload
    },
    setSelectedOption:(state, action) => {
      state.selectedOption = action.payload
    }
  }
})

export default taxiSlice