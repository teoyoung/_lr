import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { UseAppSelector } from '../Store';
import { SelectLogin } from '../api/UserAPI';

export const AuthRouter = ({children, ...param })=> {
    const isLogin = UseAppSelector(SelectLogin);
    return (
        <Route {...param} render={() => isLogin ? children : <Redirect to="/" />}/>
    )
}