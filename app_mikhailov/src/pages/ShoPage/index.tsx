import ItemList from '../../components/ItemList';
import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import { UseAppSelector, UseAppDispatch} from '../../Store';
import { SelectSalesShopItems, SelectShopTotal, sale } from '../../api/ShopAPI';

const ShoPage = () => {
    const total = UseAppSelector(SelectShopTotal);
    const dispath = UseAppDispatch();
    const saleButton = total > 0 ? <Link to='/checkout' onClick={() => dispath(sale())}><Button text='КУПИТЬ' /></Link> : undefined;

    return (
        <div>
            <ItemList />
            <h4>ИТОГО: {total} </h4>
            <Link to='/' ><Button text='НАЗАД' /></Link>
            {saleButton}
        </div>
    );
}

export default ShoPage;