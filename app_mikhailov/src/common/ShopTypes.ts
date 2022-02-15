export type IngredientsType = 'favorite' | 'allergy';
export interface IIngredientItem {
    name: string;
    type?: IngredientsType;
    uid: string;
}

export interface IShopItem {
    name: string;
    price: number;
    ingredients: IIngredientItem[];
    imgUrl: string;
    count?: number;
    totalCost?: number; 
}

export interface IShopItemUID extends IShopItem {
    uid: string;
}