import { createSlice } from '@reduxjs/toolkit'

// Define state types for CapturedPhoto
interface DefinedRouteState {
  route: String
}

// Initialize state values
const initialState: DefinedRouteState = {
  route: ''
}

export const definedRouteSlice = createSlice({
  name: 'definedRoute',
  initialState,
  reducers: {
    updateDefinedRoute: (state: any, clickedRoute: any) => {
      state.route = clickedRoute.payload
    },
  },
})

// Export the actions for this slice
export const { updateDefinedRoute } = definedRouteSlice.actions

// Export state values
export const selectDefinedRoute = (state: any) => state.definedRoute.route

// Export the default slice reducer
export default definedRouteSlice.reducer
