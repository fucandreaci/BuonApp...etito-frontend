import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer, {RootState} from './reducer.config';
import {useDispatch} from 'react-redux';

export const storeConfig = configureStore({
  reducer: rootReducer,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof storeConfig.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default storeConfig
