import ItemList from '../../parts/ItemList';
import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import { UseAppSelector, UseAppDispatch} from '../../Store';
import { SelectShopTotal, Sale } from '../../store/ShopSlice';
import { ShopFooter } from './ShopPage.style';

const ShoPage = () => {
    const total = UseAppSelector(SelectShopTotal);
    const dispath = UseAppDispatch();
    const saleButton = total > 0 ? <Link to='/checkout' onClick={() => dispath(Sale())}><Button text='КУПИТЬ' /></Link> : undefined;

    return (
        <div>
            <ItemList />
            <ShopFooter>
                <h4>ИТОГО: {total} </h4>
                <Link to='/' ><Button text='НАЗАД' /></Link>
                {saleButton}
            </ShopFooter>
        </div>
    );
}

export default ShoPage;