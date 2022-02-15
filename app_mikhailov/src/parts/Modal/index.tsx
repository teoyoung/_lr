import React from 'react';
import { Component, Block, Title, Text, Bottom } from './Modal.style';
import { UseAppDispatch, UseAppSelector } from '../../Store';
import { HideModalWindow } from '../../store/ShopSlice';

const Modal = (props: {isVisible: boolean}) => {
  const {isVisible} = props;

  const dispatch = UseAppDispatch();

  if(!isVisible){
    return(
      <div></div>
    );
  }

  return (
    <Component>
      <Block>
        <Title>У вас на этот товар аллергия!</Title>
        <Text>Выберите другой товар </Text>
        <Bottom onClick={() => dispatch(HideModalWindow())}>Закрыть</Bottom>
      </Block>
    </Component>
  );
}

export default Modal;