import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../Store';
import { IngredientsType } from '../common/UserTypes';
import { GetShopItems, callLoginIn, callLoginOut, ILogin, callLoginPing } from '../api/FaceServerAPI';
import { IIngredientItem } from '../common/ShopTypes';
import { IUserPing, IUserIngredientList } from '../common/UserTypes';

type UserIngredientsType = {[uid: string]: IIngredientItem};

interface IAddIngredietn {
    ingredient: IIngredientItem;
    type: IngredientsType;
}

interface IInitState {
    ingredients: UserIngredientsType;
    isLogin: boolean;
    name: string;
}

const initialState: IInitState = {
    ingredients: {},
    isLogin: false,
    name: ''
}

export const FetchLoginIn = createAsyncThunk(
    'user/FetchLoginIn',
    async (desc: {name: string, ingredients: IUserIngredientList}): Promise<IUserPing> => {
        const {ingredients, name} = desc;
        return await callLoginIn({ingredients, name}); 
    }
);

export const FetchLoginPing = createAsyncThunk(
    'user/FetchLoginPing',
    async (): Promise<IUserPing> => {
        return await callLoginPing();; 
    }
);

export const FetchLoginOut = createAsyncThunk(
    'user/FetchLoginOut',
    async (): Promise<boolean> => {
        return await callLoginOut();
    }
);

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        AddIngredietn: (state, action: PayloadAction<IAddIngredietn>) => {
            const { ingredient, type } = action.payload;
            const { uid } = ingredient;
            if(!uid) {
                return;
            }
            state.ingredients[uid] = {...ingredient, type};           
        },
        RemoveIngredietn: (state, action: PayloadAction<IIngredientItem>) => {
            const {uid} = action.payload;
            if(!uid) {
                return;
            }
            delete state.ingredients[uid];   
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchLoginIn.fulfilled, (state, action) => {
            const {isLogin, name, ingredients} = action.payload;
            state.isLogin = isLogin;
            state.ingredients = ingredients;
            state.name = name;
            state.name = name;
        });
        builder.addCase(FetchLoginPing.fulfilled, (state, action) => {
            const {isLogin, name, ingredients} = action.payload;
            state.isLogin = isLogin;
            state.ingredients = ingredients;
            state.name = name;
            state.name = name;
        });
        builder.addCase(FetchLoginOut.fulfilled, (state, action) => {
            state.isLogin = action.payload;
        });
    }
})

export const UserReducer = UserSlice.reducer;
export const { AddIngredietn, RemoveIngredietn } = UserSlice.actions;
export const SelectLogin = (state: RootState) => state.user.isLogin;
export const SelectUserIngridients = (state: RootState) => state.user.ingredients;
export const SelectUserName = (state: RootState) => state.user.name;