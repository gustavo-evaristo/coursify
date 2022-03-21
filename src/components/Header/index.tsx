import React from 'react';
import {Container, MenuContent, Image, MenuItem} from './styles';
import Logo from '../../assets/images/logo.png';

export const Header: React.FC = ({...rest}) => (
  <Container {...rest}>
    <Image source={Logo} />
    <MenuContent>
      <MenuItem />
    </MenuContent>
  </Container>
);
