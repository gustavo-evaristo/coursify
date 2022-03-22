import React from 'react';
import {Linking} from 'react-native';
import Logo from '../../assets/images/logo2.png';

import {Container, Image, Text, Button} from './styles';

export const Footer: React.FC = ({...rest}) => (
  <Container {...rest}>
    <Image source={Logo} />
    <Text>
      O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa
      ou empresa pode construir seu EAD e vender cursos pela internet.
    </Text>
    <Button onPress={() => Linking.openURL('https://coursify.me')}>
      <Text>Quero conhecer a plataforma!</Text>
    </Button>
  </Container>
);
