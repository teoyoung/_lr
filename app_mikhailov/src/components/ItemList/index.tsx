import React from 'react';
import Item from './Item';
import { Component } from './ItemList.style';
import { UseAppSelector} from '../../Store';
import { SelectSalesShopItems, SelectShopTotal } from '../../api/ShopAPI';


const ItemList = () => {

  const selector = UseAppSelector(SelectSalesShopItems);

  const names = [];
  const priceArr = [];
  const totalCostArr = [];

  for (const uid in selector) {
    const {name, totalCost, count} = selector[uid];
    names.push(<div key={uid}>{name}</div>);
    priceArr.push(<div key={uid}>{count}</div>);
    totalCostArr.push(<div key={uid}>{totalCost}</div>);
  }

  return (
    <div>
      <Component>
        <div>
            <h3>Товар</h3>
            {names}
        </div>
        <div>
            <h3>Штук</h3>
            {priceArr}
        </div>
        <div>
            <h3>Итого</h3>
            {totalCostArr}
        </div>
    </Component>
    </div>
  );
}

export default ItemList;