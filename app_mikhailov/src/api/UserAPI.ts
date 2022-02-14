import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../Store';
import {getLocalStoragePath, setLocalStoragePath} from './LocalStorageAPI';
import {StatusType} from '../common/statusType';
import {IngredientItemUID} from './ShopAPI';

type UserIngredientsType = {[uid: string]: IngredientItemUID};

interface LoginState {
    isLogin: boolean;
    name: string;
    ingridients: UserIngredientsType;
    status: StatusType;
}

const isLogin = getLocalStoragePath<boolean>(['isLogin'], false);
const ingridients = getLocalStoragePath<UserIngredientsType>(['Userngridients'], {});

const initialState: LoginState = {
    isLogin: isLogin || false,
    name: null,
    ingridients: ingridients || {},
    status: 'idle',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginIn: ( state, action: PayloadAction<string> ) => {
            state.isLogin = setLocalStoragePath<boolean>(['isLogin'], true);
            state.name = action.payload;
        },
        loginOut: ( state ) => {
            state.isLogin = setLocalStoragePath<boolean>(['isLogin'], false);
            if(localStorage['Userngridients']){
                delete localStorage['Userngridients']
            }
        },
        setIngridietns: ( state, action: PayloadAction<UserIngredientsType> ) => {
            state.ingridients = action.payload;            
            setLocalStoragePath<UserIngredientsType>(['Userngridients'], state.ingridients);
        }
    }
});

export const AuthReducer = loginSlice.reducer;
export const { loginIn, loginOut, setIngridietns } = loginSlice.actions;

export const SelectLogin = (state: RootState) => state.auth.isLogin;
export const SelectName = (state: RootState) => state.auth.name;
export const SelectUserIngridients = (state: RootState) => state.auth.ingridients;