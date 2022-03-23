import React from 'react';
import {LoadingStyled, Container} from './styles';

type Props = {
  visible: boolean;
};

export const Loading: React.FC<Props> = ({visible}) => (
  <Container>
    <LoadingStyled animating={visible} />
  </Container>
);
