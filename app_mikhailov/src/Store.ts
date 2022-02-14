import { configureStore } from '@reduxjs/toolkit';
import {AuthReducer} from './api/UserAPI';
import {ShopReducer} from './api/ShopAPI';
import { IngridientReducer } from './reducers/IngridientReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const Store = configureStore({
    reducer: {
      auth: AuthReducer,
      ingridient: IngridientReducer,
      shop: ShopReducer
    },
})

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;