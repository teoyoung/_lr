import ShopCard from './ShopCard';
import React from 'react';
import { UseAppSelector, UseAppDispatch} from '../../Store';
import {FetchShopItems} from '../../store/ShopSlice';
import { SelectShopItems } from '../../store/ShopSlice';
import { ShopItemsBlock } from './ShopItems.style';

const ShopItems = () => {
  const selectorItems = UseAppSelector(SelectShopItems);
  const Dispath = UseAppDispatch();

  Dispath(FetchShopItems());

  const listItems = [];
  for(const key in selectorItems) {
    const item = selectorItems[key];
    listItems.push(
      <ShopCard key={key} uid = {item.uid} name = {item.name} ingredients = {item.ingredients} imgUrl = {item.imgUrl} price = {item.price} /> 
    )      
  }

  return (
      <ShopItemsBlock>
          {!listItems.length ? <h3>Загрузка...</h3> : listItems}
      </ShopItemsBlock>
  );
}

export default ShopItems;