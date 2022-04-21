import { configureStore } from '@reduxjs/toolkit'
import capturedPhotoReducer from '../components/CapturedPhoto/capturedPhotoSlice'
import averageColorReducer from '../components/Camera/averageColorSlice'


export const store = configureStore({
  reducer: {
    capturedPhoto: capturedPhotoReducer,
    averageColor: averageColorReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
