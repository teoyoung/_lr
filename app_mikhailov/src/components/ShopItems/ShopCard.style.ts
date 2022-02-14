import styled, { createGlobalStyle, css } from 'styled-components';

export const Component = styled.div`
  border: 1px solid #171717;
  margin: 10px;
`;

export const Ingridient = styled.li`
  color: ${props => props.color};
  display: inline;
  padding: 3px;
  margin: 3px;
  border: 1px solid #1c1c1c;
`;

export const ItemImageBackground = styled.div`
  background-color: #333335;
  background-image: url(${props => props.color});
  background-size: cover;
  padding: 50px 120px;
  width: 150px;
  height: 50px;
`;