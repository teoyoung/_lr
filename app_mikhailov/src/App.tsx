import React from 'react'
import ShopWindowsPage from './pages/ShopWindowsPage'
import Header from './parts/Header'
import {
    BrowserRouter,
    Switch,
  } from "react-router-dom";
import { UseAppSelector, UseAppDispatch } from './Store';
import { AuthRouter } from './routers/AuthRouter';
import { RegistrationRouter } from './routers/RegistrationRouter';
import { createGlobalStyle } from 'styled-components'
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import {FetchLoginPing, SelectLogin} from './store/UserSlice';

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
    const dispath = UseAppDispatch(); 
    dispath(FetchLoginPing());

    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
              <Header/>
                <Switch>
                    <RegistrationRouter exact path="/" children={<AuthPage />} isLogin={isLogin} />
                    <AuthRouter isLogin={isLogin} path="/sale" children={<ShopWindowsPage />} />
                    <AuthRouter isLogin={isLogin} path="/shop" children={<ShopPage />} />
                    <AuthRouter isLogin={isLogin} path="/checkout" children={<CheckoutPage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );  
}