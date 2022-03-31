import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define state types for CapturedPhoto
interface CapturedPhotoState {
  open: boolean
}

// Initialize state values
const initialState: CapturedPhotoState = {
  open: false  // Initializes modal view state
}

export const capturedPhotoSlice = createSlice({
  name: 'toggleView',
  initialState,
  reducers: {
    // Slice function to toggle the modal view based on payload
    togglePhotoView(state, action: PayloadAction<boolean>) {
      state.open = action.payload
    }
  }
})

// Export the toggle action function for the capturedPhotoSlice
export const { togglePhotoView } = capturedPhotoSlice.actions

// Export the default slice reducer
export default capturedPhotoSlice.reducer
