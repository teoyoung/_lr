import Modal from '../../parts/Modal';
import React from 'react';
import ShopItems from '../../parts/ShopItems';
import { UseAppSelector } from '../../Store';
import { SelectShopViewModal } from '../../store/ShopSlice';
import { Component } from './ShopWindows.style';

const ShopWindows = () => {
    const selectModel = UseAppSelector(SelectShopViewModal);
    return (
        <Component>
            <Modal isVisible = {selectModel}/>      
            <ShopItems/>
        </Component>
    );
}

export default ShopWindows;