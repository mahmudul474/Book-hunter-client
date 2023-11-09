import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './featured/counter/cunterSlice'
import  registrationReducer from './featured/user/registrationSlice'
import { bookApi } from './api/apiSlice'
import bookReducer from './featured/book/bookSlice'

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    user: registrationReducer,
    book:bookReducer,
    [bookApi.reducerPath]:bookApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(bookApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch