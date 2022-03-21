import React from 'react';
import {
  Wrapper,
  Container,
  HeaderStyled,
  CategoryStyled,
  FilterStyled,
} from './styles';

const Home = () => {
  return (
    <Wrapper>
      <HeaderStyled />
      <Container>
        <FilterStyled text="A-Z" />
        <CategoryStyled name="CURSOS ONLINE" />
      </Container>
    </Wrapper>
  );
};

export default Home;
