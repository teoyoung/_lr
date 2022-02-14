import React, { useState } from 'react';
import {HeaderStyle, ShopStyle, NameBlockStyle, LoginButton, BlockStyle, ShopBlockStyle, TitleBlockStyle, TitleStyle, LogoStyle} from './Header.style';
import logo from './logo.png';
import shop from './shop.png';
import { Link } from "react-router-dom";

import { loginOut, SelectName } from '../../api/UserAPI'
import { UseAppDispatch, UseAppSelector } from '../../Store';
import Button from '../../components/Button';

const Header = () => {
    const selectName = UseAppSelector(SelectName);   
    const despatch = UseAppDispatch();
    
    return (
        <HeaderStyle>
            <LogoStyle>
                <Link to='./sale'><img src={logo}/></Link>                
            </LogoStyle>
            <TitleBlockStyle>
                <TitleStyle>Добро пожаловать: <NameBlockStyle>{selectName}</NameBlockStyle></TitleStyle>
            </TitleBlockStyle>
            <ShopBlockStyle>
                <LoginButton>
                    <Link to='/' onClick={() => despatch(loginOut())}><Button text='LOGIN OUT'/></Link>
                </LoginButton>
                <ShopStyle>
                    <Link to='./shop'><img src={shop}/></Link>
                </ShopStyle>
            </ShopBlockStyle>            
        </HeaderStyle>
    );
}

export default Header;