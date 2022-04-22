import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

// Define state types for CapturedPhoto
interface IntervalState {
  id: number
}

// Initialize state values
const initialState: IntervalState = {
  id: 0
}

export const intervalSlice = createSlice({
  name: 'interval',
  initialState,
  reducers: {
    updateInterval: (state: any, intervalId: any) => {
      state.id = intervalId.payload
    },
  },
})

// Export the actions for this slice
export const { updateInterval } = intervalSlice.actions

// Export state values
export const selectInterval = (state: RootState) => state.interval.id

// Export the default slice reducer
export default intervalSlice.reducer
