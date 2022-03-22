import React from 'react';
import {If} from '../If';

import Logo from '../../assets/images/logo.png';

import {
  Container,
  MenuContent,
  Image,
  MenuItem,
  IconBack,
  IconContent,
} from './styles';

type Props = {
  showIconBack?: boolean;
  onPressIconBack?: () => void;
};

export const Header: React.FC<Props> = ({showIconBack, onPressIconBack}) => (
  <Container>
    <IconContent>
      <If condition={showIconBack || false}>
        <IconBack onPress={onPressIconBack} />
      </If>
      <Image source={Logo} />
    </IconContent>
    <MenuContent>
      <MenuItem />
    </MenuContent>
  </Container>
);
