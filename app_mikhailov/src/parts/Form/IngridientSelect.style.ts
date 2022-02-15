import styled, { createGlobalStyle, css } from 'styled-components';

export const Block = styled.div`
    padding-bottom: 10px;
`;

export const IngredientText = styled.label`
    color: ${props => (props.color)};
    padding-left: 10px;
`;