import React, { ReactNode } from 'react';
import * as s from "./styled-label";

interface LabelProps{
    children: ReactNode;
    htmlFor: string;
}

// import { Container } from './styles';

const Label = ({children, htmlFor}: LabelProps) => {
  return <s.Label htmlFor={htmlFor}>{children}</s.Label>;
};

export default Label;