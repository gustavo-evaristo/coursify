import React from 'react';
import {Container, ContentFilter, TextFilter, ArrowIcon} from './styles';

type Props = {
  text: string;
};

export const Filter: React.FC<Props> = ({text}) => (
  <Container>
    <TextFilter>ORDENAR POR</TextFilter>
    <ContentFilter>
      <TextFilter>{text}</TextFilter>
      <ArrowIcon />
    </ContentFilter>
  </Container>
);
