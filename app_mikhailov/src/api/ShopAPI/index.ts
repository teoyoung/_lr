import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Store';
import { StatusType, IngredientsType } from '../../common/statusType';
import { GeneratedItems } from '../../common/Utils';

export interface IngredientItem {
    name: string;
    type?: IngredientsType
}
export interface IngredientItemUID extends IngredientItem {
    uid: string;
}

export interface ShopItem {
    name: string;
    price: number;
    ingredients: IngredientItemUID[];
    imgUrl: string;
}
export interface ShopItemUID extends ShopItem {
    uid: string;
}

interface ShopItemSale extends ShopItem {
    count: number;
    totalCost: number; 
}

interface InitState {
    ingredients: IngredientItemUID[];
    shopItems: {[uid: string]: ShopItemUID};
    saleItems: {[uid: string]: ShopItemSale};
    status: StatusType;
    isViewModal: boolean;   
    total: number; 
}

const ingredients = [
    { name: 'сахар', uid: '001'}, { name: 'соль', uid: '002'}, { name: 'перец', uid: '003'}, { name: 'мёд', uid: '004'}, { name: 'шоколад', uid: '005'},
    { name: 'сода', uid: '006'}, { name: 'перец', uid: '007'}, { name: 'орехи', uid: '008'}, { name: 'фисташки', uid: '009'}, { name: 'яйцо', uid: '010'}
];

const initialState: InitState = {
    ingredients,
    shopItems: GeneratedItems<ShopItem, ShopItemUID>([
        {name: 'Печенье с изюмом', price: 150, imgUrl: 'pic.jpg', ingredients: [ingredients[0], ingredients[1],  ingredients[3], ingredients[2]]},
        {name: 'Вафли', price: 400, imgUrl: 'pic1.jpg', ingredients: [ingredients[4], ingredients[2]]},
        {name: 'Конфеты', price: 50, imgUrl: 'pic2.jpg', ingredients: [ingredients[6], ingredients[7],  ingredients[8]]},
        {name: 'Торт', price: 50, imgUrl: 'pic3.jpg', ingredients: [ingredients[6], ingredients[0]]},
        {name: 'Торт2', price: 80, imgUrl: 'pic4.jpg', ingredients: [ingredients[3], ingredients[5]]},
        {name: 'Вафельный торт', price: 50, imgUrl: 'pic.jpg', ingredients: [ingredients[0], ingredients[1],  ingredients[3], ingredients[2]]},
        {name: 'Карамель', price: 400, imgUrl: 'pic1.jpg', ingredients: [ingredients[4], ingredients[2]]},
        {name: 'Блины', price: 50, imgUrl: 'pic.jpg', ingredients: [ingredients[6], ingredients[7],  ingredients[8]]},
        {name: 'Торт3', price: 50, imgUrl: 'pic2.jpg', ingredients: [ingredients[6], ingredients[0], ingredients[9]]},
        {name: 'Торт4', price: 80, imgUrl: 'pic4.jpg', ingredients: [ingredients[3], ingredients[5]]},
        {name: 'Торт2', price: 80, imgUrl: 'pic2.jpg', ingredients: [ingredients[3], ingredients[5]]},
        {name: 'Вафельный торт', price: 50, imgUrl: 'pic1.jpg', ingredients: [ingredients[0], ingredients[1],  ingredients[3], ingredients[2]]},
        {name: 'Карамель', price: 400, imgUrl: 'pic.jpg', ingredients: [ingredients[4], ingredients[2]]},
        {name: 'Блины', price: 50, imgUrl: 'pic3.jpg', ingredients: [ingredients[0], ingredients[1]]},
        {name: 'Торт3', price: 50, imgUrl: 'pic1.jpg', ingredients: [ingredients[1], ingredients[3]]},
        {name: 'Торт4', price: 80, imgUrl: 'pic2.jpg', ingredients: [ingredients[0], ingredients[1],  ingredients[3], ingredients[2]]}
    ]),
    isViewModal: false,
    saleItems: {},
    total: 0,
    status: 'idle',
};

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {

        saleItem: (state, action: PayloadAction<{item: ShopItemUID, isAllergy: boolean}>) => {     
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

        sale: (state) => {
            console.log(state.saleItems);
            state.saleItems = {}
        },

        hideModalWindow: (state) => {
            if(state.isViewModal){
               state.isViewModal = false;
            }
        }
    }
});

export const ShopReducer = shopSlice.reducer;
export const { saleItem, hideModalWindow, sale } = shopSlice.actions;

export const SelectShopIngredietns = (state: RootState) => state.shop.ingredients;
export const SelectShopItems = (state: RootState) => state.shop.shopItems;
export const SelectSalesShopItems = (state: RootState) => state.shop.saleItems;
export const SelectShopModal = (state: RootState) => state.shop.isViewModal;
export const SelectShopTotal = (state: RootState) => state.shop.total;