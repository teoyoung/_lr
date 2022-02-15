import { IIngredientItem } from './ShopTypes';

export interface IUserIngredientList {[uid: string]: IIngredientItem};

export interface IUserPing {
    name: string;
    isLogin: boolean;
    ingredients: IUserIngredientList;
}

export type IngredientsType = 'favorite' | 'allergy';