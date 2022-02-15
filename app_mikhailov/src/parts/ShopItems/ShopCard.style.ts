import styled, { createGlobalStyle, css } from 'styled-components';

export const Component = styled.div`
  border: 1px solid #171717;
  margin: 10px;
`;

export const Ingridient = styled.li`
  color: ${props => props.color};
  display: inline-block;
  padding: 5px;
  margin: 8px;
  border: 1px solid #1c1c1c;
`;

export const ItemImageBackground = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  background-color: #333335;
  background-image: url(${props => props.color});
  background-size: cover;
  width: 100%;
  height: 300px;
`;

export const Title = styled.div`
  display: inline-block;
  background-color: #ffffff;
  padding: 20px;
`;

export const Price = styled.p`
  padding: 10px 20px;
  margin: 20px;
  font-size: 20px;
  background-color: #333335;
`;

export const ShopButton = styled.button`
    padding: 10px 20px;
    margin: 20px;
`;

export const IngredientList = styled.ul`
  margin: 20px;
`;