import ShopCard from './ShopCard';
import React from 'react';
import { UseAppSelector} from '../../Store';
import { SelectShopItems } from '../../api/ShopAPI';
import { ShopItemsBlock } from './ShopItems.style';

const ShopItems = () => {
  const selectorItems = UseAppSelector(SelectShopItems);
  const listItems = [];
  for(const key in selectorItems) {
    const item = selectorItems[key];
    listItems.push(
      <ShopCard key={key} uid = {item.uid} name = {item.name} ingredients = {item.ingredients} imgUrl = {item.imgUrl} price = {item.price} /> 
    )      
  }

  return (
      <ShopItemsBlock>
          {listItems}
      </ShopItemsBlock>
  );
}

export default ShopItems;