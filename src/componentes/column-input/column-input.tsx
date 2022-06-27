import React, { ReactNode } from 'react';
import * as s from './styled-column-input';
interface ColumnInputProps {
  children: ReactNode;
  style?: object;
  className?: string;
}

// import { Container } from './styles';

const ColumnInput = ({ children, style, className }: ColumnInputProps) => {
  return (
    <s.ColumnInput style={style} className={className}>
      {children}
    </s.ColumnInput>
  );
};

export default ColumnInput;