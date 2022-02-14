import React, { useState } from 'react'
import { Component, Ingridient, ItemImageBackground } from './ShopCard.style';
import { UseAppSelector, UseAppDispatch } from '../../Store';
import { SelectLogin, SelectUserIngridients } from '../../api/UserAPI';
import { saleItem, ShopItemUID } from '../../api/ShopAPI';
import Button from '../../components/Button';

const ShopCard = (props: ShopItemUID) => {

    const mapUserIngredient = UseAppSelector(SelectUserIngridients);

    const {name = '', price = null, imgUrl = 'pic.jpg', ingredients = [], uid} = props;
    if(!uid) {
        return;
    }
    const dispath = UseAppDispatch();

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
            <ItemImageBackground color={`./assets/${imgUrl}`}>
                <h2>{name}</h2>
            </ItemImageBackground>            
            <h3>{price}$ </h3>
            <ul>{ingredientsList}</ul>
            <button onClick={() => dispath(saleItem({item: props, isAllergy}))}>Купить</button>
        </Component>
    );
}

export default ShopCard;