import { useDispatch } from 'react-redux'
import CategorySlice from '../reducer/CategorySlice';

import { configureStore } from '@reduxjs/toolkit'
import QuestionSlice from '../reducer/QuestionSlice';
const store = configureStore({
  reducer: {
    Categories: CategorySlice,
    Questions: QuestionSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
