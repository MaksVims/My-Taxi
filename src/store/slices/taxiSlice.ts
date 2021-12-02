import {TGeoPosition, TLocation, TTaxiState} from "@/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TTaxiState = {
  from: {} as TGeoPosition,
  to: {} as TGeoPosition,
  currentLocation: {} as TLocation,
  userPlaceLocation: {} as TLocation,
  tripDistance: 0,
  tripTime: 0
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
    setTripDistance:(state, action) => {
      state.tripDistance = action.payload
    },
    setTripTime:(state, action) => {
      state.tripTime = action.payload
    }
  }
})

export default taxiSlice