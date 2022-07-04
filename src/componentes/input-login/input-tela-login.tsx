import React, { ReactNode } from 'react';
import * as s from "./styled.input-tela-login"

interface InputTelaLoginProps {
    children: ReactNode;
    style?: object;
    className?: string;
    type: string;
    name: string;
  }

// import { Container } from './styles';

const InputTelaLogin = ({ children, style, className }: InputTelaLoginProps) => {
    return (
      <s.InputTelaLogin style={style} className={className}>
        {children}
      </s.InputTelaLogin>
    );
}

export default InputTelaLogin;