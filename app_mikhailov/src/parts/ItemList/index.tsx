import React from 'react';
import { Component, Element, Title } from './ItemList.style';
import { UseAppSelector} from '../../Store';
import { SelectSalesShopItems} from '../../store/ShopSlice';


const ItemList = () => {

  const selector = UseAppSelector(SelectSalesShopItems);

  const names = [];
  const priceArr = [];
  const totalCostArr = [];

  for (const uid in selector) {
    const {name, totalCost, count} = selector[uid];
    names.push(<Element key={uid}><h4>{name}</h4></Element>);
    priceArr.push(<Element key={uid}>{count}</Element>);
    totalCostArr.push(<Element key={uid}>{totalCost}</Element>);
  }

  return (
    <div>
      <Component>
        <div>
            <Title>Товар</Title>
            {names}
        </div>
        <div>
            <Title>Штук</Title>
            {priceArr}
        </div>
        <div>
            <Title>Итого</Title>
            {totalCostArr}
        </div>
    </Component>
    </div>
  );
}

export default ItemList;