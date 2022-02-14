import styled, { createGlobalStyle, css } from 'styled-components';

export const Block = styled.div`
    border: 1px solid black;
`

export const HeaderStyle = styled.header`
    display: flex;
    color: #ffffff;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(to right, #fe6269, #fcaa73);
`

export const BlockStyle = styled.div`
    display: flex;
`

export const ShopBlockStyle = styled.div`
    display: flex;
`
export const TitleBlockStyle = styled.div`
    display: flex;
    flex-grow: 1;
    flex-flow: row nowrap;
    text-transform: uppercase;
    float: left;
`

export const NameBlockStyle = styled.div`
    float: right;
    padding-left: 10px;
    color: #3d3d3f;
`

export const TitleStyle = styled.div`
    padding-left: 30px;
`

export const LogoStyle = styled.div`
    padding: 20px;
`

export const ShopStyle = styled.div`
    padding: 20px;
`

export const LoginButton = styled.p`
    margin: auto;
    padding-right: 10px;
`