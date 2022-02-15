import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const AuthRouter = ({children, isLogin, ...param })=> {
    return (
        <Route {...param} render={() => isLogin ? children : <Redirect to="/" />}/>
    )
}