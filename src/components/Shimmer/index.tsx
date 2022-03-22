import React from 'react';
import {Container} from './styles';

type Props = {
  children: any;
};

export const Shimmer: React.FC<Props> = ({children, ...rest}) => (
  <Container {...rest}>{children}</Container>
);
