import { configureStore } from '@reduxjs/toolkit'
import capturedPhotoReducer from '../components/CapturedPhoto/capturedPhotoSlice'
import averageColorReducer from '../components/Camera/reducers/averageColorSlice'
import intervalReducer from '../components/Camera/reducers/intervalSlice'


export const store = configureStore({
  reducer: {
    capturedPhoto: capturedPhotoReducer,
    averageColor: averageColorReducer,
    interval: intervalReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
