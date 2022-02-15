import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const RegistrationRouter = ({children, isLogin, ...param })=> {
    return (
        <Route {...param} render={() => isLogin ? <Redirect to="/sale" /> : children}/>
    )
}