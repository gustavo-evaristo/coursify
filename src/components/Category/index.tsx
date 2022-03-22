import React from 'react';
import {If} from '../If';
import {
  Container,
  ContentLoadMore,
  TextCategory,
  TextLoadMore,
  ArrowIcon,
  LoadMoreShimmer,
  TextShimmer,
} from './styles';

type Props = {
  name: string;
  loading: boolean;
};

export const Category: React.FC<Props> = ({name, loading}) => (
  <>
    <If condition={loading}>
      <Container>
        <TextShimmer />
        <LoadMoreShimmer />
      </Container>
    </If>
    <If condition={!loading}>
      <Container>
        <TextCategory numberOfLines={1}>{name}</TextCategory>
        <ContentLoadMore>
          <TextLoadMore>VER MAIS</TextLoadMore>
          <ArrowIcon />
        </ContentLoadMore>
      </Container>
    </If>
  </>
);
