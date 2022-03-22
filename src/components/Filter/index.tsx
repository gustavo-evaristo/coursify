import React from 'react';
import {
  Container,
  ContentFilter,
  TextFilter,
  ArrowIcon,
  FilterShimmer,
  TextShimmer,
} from './styles';
import {If} from '../If';

type Props = {
  text: string;
  loading: boolean;
};

export const Filter: React.FC<Props> = ({text, loading}) => (
  <>
    <If condition={loading}>
      <Container>
        <TextShimmer />
        <FilterShimmer />
      </Container>
    </If>
    <If condition={!loading}>
      <Container>
        <TextFilter>ORDENAR POR</TextFilter>
        <ContentFilter>
          <TextFilter>{text}</TextFilter>
          <ArrowIcon />
        </ContentFilter>
      </Container>
    </If>
  </>
);
