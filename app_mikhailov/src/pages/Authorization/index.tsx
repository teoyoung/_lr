import Form from '../../components/Form';
import React from 'react';
import { RegisterBlock, FormBlock, Title } from './Authorization.style';

const Authorization = () => {
    return (
        <RegisterBlock>
            <FormBlock>
                <Title>Регистрация:</Title>
                <Form/>
            </FormBlock>      
                  
        </RegisterBlock>
    );
}

export default Authorization;