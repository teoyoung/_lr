import React from 'react'
import { Component, Ingridient, ItemImageBackground, Title, ShopButton, IngredientList, Price } from './ShopCard.style';
import { UseAppSelector, UseAppDispatch } from '../../Store';
import { SelectUserIngridients } from '../../store/UserSlice';
import { SaleItem, ShopItemUID } from '../../store/ShopSlice';

const ShopCard = (props: ShopItemUID) => {
    const mapUserIngredient = UseAppSelector(SelectUserIngridients);
    const dispath = UseAppDispatch();

    const {name = '', price = null, imgUrl = 'pic.jpg', ingredients = [], uid} = props;
    if(!uid) {
        return;
    }

    const ingredientsList = ingredients.map((item) => {
        const {uid, name} = item;
        const type = mapUserIngredient[uid] ? mapUserIngredient[uid].type : undefined; 
        const color = !type ? 'black' : type === 'allergy' ? 'red' : type === 'favorite' ? 'green' : 'black';
        return <Ingridient key={uid} color={color}>{name}</Ingridient>
    });

    const isAllergy = ingredients.some((item) => {
        if(!mapUserIngredient[item.uid]) {
            return false;
        }
        const type = mapUserIngredient[item.uid].type;
        return type === 'allergy'
    });

    return (
        <Component>
            <ItemImageBackground color={`./assets/shop/${imgUrl}`}>
                <Title><h3>{name}</h3></Title>
            </ItemImageBackground>            
            <Price>{price}$ </Price>
            <IngredientList>{ingredientsList}</IngredientList>
            <ShopButton onClick={() => dispath(SaleItem({item: props, isAllergy}))}>Купить</ShopButton>
        </Component>
    );
}

export default ShopCard;