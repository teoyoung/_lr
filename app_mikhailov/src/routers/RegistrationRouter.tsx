import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const RegistrationRouter = ({children, auth, ...param })=> {
    return (
        <Route {...param} render={() => auth ? <Redirect to="/sale" /> : children}/>
    )
}