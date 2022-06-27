import React, { ReactNode } from 'react';
import * as s from "./styled-row-selectors"

interface RowSelectorsProps {
    children: ReactNode;
    
}

// import { Container } from './styles';

const RowSelectors = ({children}: RowSelectorsProps) => {
  return <s.RowSelectors>{children}</s.RowSelectors>;
}

export default RowSelectors;