import React from 'react';
import { ButtomBlock } from './Button.style';

const Button = (props: {text: string}) => {
    const {text} = props;
  return (
    <ButtomBlock ><p>{text}</p></ButtomBlock>
  );
}

export default Button;