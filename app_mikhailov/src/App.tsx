import React, { Component } from 'react'
import ShopWindows from './pages/ShopWindows'
import Header from './components/Header'
import Authorization from './pages/Authorization';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { UseAppSelector } from './Store';
import { AuthRouter } from './routers/AuthRouter';
import { RegistrationRouter } from './routers/RegistrationRouter';
import { SelectLogin } from './api/UserAPI';
import { createGlobalStyle } from 'styled-components'
import ShoPage from './pages/ShoPage';
import CheckoutPage from './pages/Checkout';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #3d3d3f;
  }
`

export default function App() {

    const isLogin = UseAppSelector(SelectLogin);
    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
              <Header/>
                <Switch>
                    <RegistrationRouter exact path="/" children={<Authorization />} auth={isLogin} />
                    <AuthRouter path="/sale" children={<ShopWindows />} />
                    <AuthRouter path="/shop" children={<ShoPage />} />
                    <AuthRouter path="/checkout" children={<CheckoutPage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );  
}