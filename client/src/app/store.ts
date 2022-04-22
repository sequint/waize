import { configureStore } from '@reduxjs/toolkit'
import capturedPhotoReducer from '../components/CapturedPhoto/capturedPhotoSlice'
import averageColorReducer from '../components/Camera/averageColorSlice'
import definedRouteReducer from '../components/NavBar/definedRouteSlice'


export const store = configureStore({
  reducer: {
    capturedPhoto: capturedPhotoReducer,
    averageColor: averageColorReducer,
    definedRoute: definedRouteReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
