import Button from '../../components/Button';
import React from 'react';
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    return (
        <div>
            <h2>Вы успешно оплатили заказ</h2>
            <Link to='/'><Button text='НАЗАД' /></Link>
        </div>
    );
}

export default CheckoutPage;