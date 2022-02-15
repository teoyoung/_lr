import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState  } from '../Store';
import { GetIngredientItems, GetShopItems } from '../api/FaceServerAPI';
import { IShopItemUID, IIngredientItem } from '../common/ShopTypes';

export interface ShopItem {
    name: string;
    price: number;
    ingredients: IIngredientItem[];
    imgUrl: string;
}

export interface ShopItemUID extends ShopItem {
    uid: string;
}

export interface ShopItemSale extends ShopItem {
    count: number;
    totalCost: number; 
}

interface IInitState {
    shopItems: {[key: string]: IShopItemUID};
    ingredientItems: IIngredientItem[];
    isViewModal: boolean;
    saleItems: {[uid: string]: ShopItemSale},
    total: number,
}

const initialState: IInitState = {
    shopItems: {},
    ingredientItems: [],
    isViewModal: false,
    saleItems: {},
    total: 0,
}


export const FetchShopItems = createAsyncThunk(
    'shop/fetchShopItems',
    async () => {
        return await GetShopItems();
    }
);

export const FetchIngredientItems = createAsyncThunk(
    'shop/fetchIngredientItems',
    async () => {
      return await GetIngredientItems();
    }
);

const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        HideModalWindow: (state) => {
            if(state.isViewModal){
               state.isViewModal = false;
            }
        },
        SaleItem: (state, action: PayloadAction<{item: ShopItemUID, isAllergy: boolean}>) => {     
            const { uid, ingredients, price } = action.payload.item;            
            if(action.payload.isAllergy) {
                state.isViewModal = true;
                return;
            }

            state.total += price;

            if (state.saleItems[uid]) {
                state.saleItems[uid].count += 1;
                state.saleItems[uid].totalCost = price * state.saleItems[uid].count;
                return;
            }
            state.saleItems[uid] = {...action.payload.item , count: 1, totalCost: price};
        },

        Sale: (state) => {
            state.saleItems = {}
            state.total = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(FetchShopItems.fulfilled, (state, action) => {
            state.shopItems = action.payload;
        });
        builder.addCase(FetchIngredientItems.fulfilled, (state, action) => {
            state.ingredientItems = action.payload;
        });
    }
});

export const ShopReducer = ShopSlice.reducer;

export const { SaleItem, HideModalWindow, Sale } = ShopSlice.actions;

export const SelectShopItems = (state: RootState) => state.shop.shopItems;
export const SelectShopIngredientItems = (state: RootState) => state.shop.ingredientItems;
export const SelectShopViewModal = (state: RootState) => state.shop.isViewModal;
export const SelectShopTotal = (state: RootState) => state.shop.total;
export const SelectSalesShopItems = (state: RootState) => state.shop.saleItems;