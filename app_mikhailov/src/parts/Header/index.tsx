import React, { useState } from 'react';
import {HeaderStyle, ShopStyle, NameBlockStyle, LoginButton, BlockStyle, ShopBlockStyle, TitleBlockStyle, TitleStyle, LogoStyle} from './Header.style';
import { Link } from "react-router-dom";

import { SelectUserName } from '../../store/UserSlice'
import { UseAppDispatch, UseAppSelector } from '../../Store';
import Button from '../../components/Button';
import { FetchLoginOut } from '../../store/UserSlice';

const Header = () => {
    const selectName = UseAppSelector(SelectUserName);   
    const despatch = UseAppDispatch();
    
    return (
        <HeaderStyle>
            <LogoStyle>
                <Link to='./sale'><img src={'/assets/common/logo.png'}/></Link>                
            </LogoStyle>
            <TitleBlockStyle>
                <TitleStyle>Добро пожаловать: <NameBlockStyle>{selectName}</NameBlockStyle></TitleStyle>
            </TitleBlockStyle>
            <ShopBlockStyle>
                <LoginButton>
                    <Link to='/' onClick={() => despatch(FetchLoginOut())}><Button text='LOGIN OUT'/></Link>
                </LoginButton>
                <ShopStyle>
                    <Link to='./shop'><img src={'/assets/common/shop.png'}/></Link>
                </ShopStyle>
            </ShopBlockStyle>
        </HeaderStyle>
    );
}

export default Header;