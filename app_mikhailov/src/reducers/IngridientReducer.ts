import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store';
import { IngredientsType } from '../common/statusType';
import { IngredientItemUID } from '../api/ShopAPI';

interface Ingredients {[key: string]: IngredientItemUID}
interface SetIngredient {
    ingredient: IngredientItemUID;
    type: IngredientsType;
}
const initialState: {[uid: string]: IngredientItemUID} = {};

export const ingridientSlice = createSlice({
    name: 'ingridients',
    initialState,
    reducers: {
        setIngridient: (state, action: PayloadAction<SetIngredient>) => {
            const { ingredient, type } = action.payload;
            const { uid } = ingredient;
            if(!uid) {
                return;
            }
            state[uid] = {...ingredient, type};
        },
        removeIngridient: (state, action: PayloadAction<IngredientItemUID>) => {
            const {uid} = action.payload;
            if(!uid) {
                return;
            }
            delete state[uid];
        },
        clearAll: (state) => {
            state = {}
        }
    }
});

export const IngridientReducer = ingridientSlice.reducer;
export const { setIngridient, removeIngridient, clearAll } = ingridientSlice.actions;
export const SelectIngridients = (state: RootState) => state.ingridient;
