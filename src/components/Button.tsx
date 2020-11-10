import React, { ButtonHTMLAttributes }  from "react";
import { IconBaseProps } from "react-icons/lib";

import {Container} from '../styles/components/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>
}


const Button: React.FC<ButtonProps> = ({icon: Icon, children, ...rest}) => {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} strokeWidth={4}/>}
      {children}
    </Container>
  )
}

export default Button