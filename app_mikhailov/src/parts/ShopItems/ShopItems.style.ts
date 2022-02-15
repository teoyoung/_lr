import styled, { createGlobalStyle, css } from 'styled-components';

export const ShopItemsBlock = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`;