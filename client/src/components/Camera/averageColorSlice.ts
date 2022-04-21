import { createSlice } from '@reduxjs/toolkit'

// Define state types for CapturedPhoto
interface AverageColorState {
  color: number
}

// Initialize state values
const initialState: AverageColorState = {
  color: 0
}

export const averageColorSlice = createSlice({
  name: 'averageColor',
  initialState,
  reducers: {
    updateAverageColor: (state: any, newColor: any) => {
      state.color = newColor.payload
    },
  },
})

// Export the actions for this slice
export const { updateAverageColor } = averageColorSlice.actions

// Export state values
export const selectAverageColor = (state: any) => state.averageColor.color

// Export the default slice reducer
export default averageColorSlice.reducer
