import React from 'react';
import {
  Container,
  ContentLoadMore,
  TextCategory,
  TextLoadMore,
  ArrowIcon,
} from './styles';

type Props = {
  name: string;
};

export const Category: React.FC<Props> = ({name}) => (
  <Container>
    <TextCategory>{name}</TextCategory>
    <ContentLoadMore>
      <TextLoadMore>VER MAIS</TextLoadMore>
      <ArrowIcon />
    </ContentLoadMore>
  </Container>
);
