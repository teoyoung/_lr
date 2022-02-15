import { GeneratedItems } from "../common/Utils";
import { IShopItem, IShopItemUID, IIngredientItem } from '../common/ShopTypes';
import { getLocalStoragePath, setLocalStoragePath } from "./LocalStorageAPI";
import { IUserPing, IUserIngredientList } from '../common/UserTypes';

export interface ILogin {
    name: string;
    ingredients: IUserIngredientList;
}

const ingredients: IIngredientItem[] = [
    { name: 'мука пшеничная', uid: '001'}, { name: 'сахар', uid: '002'}, { name: 'масла растительные', uid: '003'}, { name: 'крахмал кукурузный', uid: '004'}, { name: 'шоколад', uid: '005'},
    { name: 'сода', uid: '006'}, { name: 'перец', uid: '007'}, { name: 'орехи', uid: '008'}, { name: 'фисташки', uid: '009'}, { name: 'яйцо', uid: '010'}
];

const shopItems = GeneratedItems<IShopItem, IShopItemUID>([
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
]);


export const GetShopItems = async (): Promise<{[kye: string]: IShopItemUID}> => {
    const date = new Promise<{[kye: string]: IShopItemUID}>((resolve, reject) => {
        setTimeout(() => resolve(shopItems), 1800);
    });
    return await date;
}

export const GetIngredientItems = async (): Promise<IIngredientItem[]> => {
    const date = new Promise<IIngredientItem[]>((resolve, reject) => {
        setTimeout(() => resolve(ingredients), 1500);
    });
    return await date;
}

export const callLoginIn = async (login: ILogin): Promise<IUserPing> => {
    const {name, ingredients} = login;

    const data = new Promise<IUserPing>((resolve, reject) => {
        setTimeout(() => {
            const isLogin = setLocalStoragePath<boolean>(['isLogin'], true);
            setLocalStoragePath<string>(['name'], name);
            setLocalStoragePath<IUserIngredientList>(['ingredietns'], ingredients);
            resolve({isLogin, ingredients, name});
        }, 700);
    });
    return data;
}

export const callLoginOut = async (): Promise<boolean> => {
    const date = new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            const login = setLocalStoragePath<boolean>(['isLogin'], false);
            resolve(login);
        }, 1200);
    });
    return await date;
}

export const callLoginPing = async (): Promise<IUserPing> => {
    const date = new Promise<IUserPing>((resolve, reject) => {
        setTimeout(() => {
            const isLogin = getLocalStoragePath<boolean>(['isLogin'], undefined);
            const ingredients = getLocalStoragePath<IUserIngredientList>(['ingredietns'], {});
            const name = getLocalStoragePath<string>(['name'], '');
            resolve({isLogin, ingredients, name});
        }, 800);
    });
    return await date;
}