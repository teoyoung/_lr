import Form from '../../parts/Form';
import React from 'react';
import { Component, FormBlock, Title } from './AuthPage.style';

const AuthPage = () => {
    return (
        <Component>
            <FormBlock>
                <Title>Регистрация:</Title>
                <Form/>
            </FormBlock>     
        </Component>
    );
}

export default AuthPage;

