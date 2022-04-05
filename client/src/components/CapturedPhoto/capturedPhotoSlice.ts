import { createSlice } from '@reduxjs/toolkit'

// Define state types for CapturedPhoto
interface CapturedPhotoState {
  open: boolean,
  photoURL: String
}

// Initialize state values
const initialState: CapturedPhotoState = {
  open: false,
  photoURL: ''
}

export const capturedPhotoSlice = createSlice({
  name: 'capturedPhoto',
  initialState,
  reducers: {
    // Slice function to toggle the modal view based on payload
    togglePhotoView: (state: any) => {
      state.open = !state.open
    },
    updatePhotoURL: (state: any, url: any) => {
      state.photoURL = url.payload
      console.log(state.photoURL)
    },
  },
})

// Export the actions for this slice
export const { togglePhotoView, updatePhotoURL } = capturedPhotoSlice.actions

// Export state values
export const selectPhotoView = (state: any) => state.capturedPhoto.open
export const selectPhotoURL = (state: any) => state.capturedPhoto.photoURL

// Export the default slice reducer
export default capturedPhotoSlice.reducer
