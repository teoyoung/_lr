import Modal from '../../components/Modal';
import React from 'react';
import ShopItems from '../../components/ShopItems';
import { ModalBlock } from './ShopWindows.style';
import { UseAppSelector } from '../../Store';
import { SelectShopModal } from '../../api/ShopAPI';

const ShopWindows = () => {

    const selectModel = UseAppSelector(SelectShopModal);

    return (
        <div>
            <Modal isVisible = {selectModel}/>      
            <ShopItems/>
        </div>
    );
}

export default ShopWindows;