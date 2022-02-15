import { configureStore } from '@reduxjs/toolkit';
import { ShopReducer } from './store/ShopSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserReducer } from './store/UserSlice';

export const Store = configureStore({
    reducer: {
      shop: ShopReducer,
      user: UserReducer
    }
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;