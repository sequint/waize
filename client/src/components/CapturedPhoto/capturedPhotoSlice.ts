import { createSlice } from '@reduxjs/toolkit'

// Define state types for CapturedPhoto
interface CapturedPhotoState {
  open: boolean
}

// Initialize state values
const initialState: CapturedPhotoState = {
  open: false  // Initializes modal view state
}

export const capturedPhotoSlice = createSlice({
  name: 'capturedPhoto',
  initialState,
  reducers: {
    // Slice function to toggle the modal view based on payload
    togglePhotoView: (state: any) => {
      state.open = !state.open
    },
  },
})

// Export the toggle action function for the capturedPhotoSlice
export const { togglePhotoView } = capturedPhotoSlice.actions

// Export state value
export const selectPhotoView = (state: any) => state.capturedPhoto.open

// Export the default slice reducer
export default capturedPhotoSlice.reducer
