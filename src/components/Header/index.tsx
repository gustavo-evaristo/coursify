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
  ImageShimmer,
  MenuShimmer,
  ContainerShimmer,
} from './styles';

type Props = {
  showIconBack?: boolean;
  onPressIconBack?: () => void;
  loading: boolean;
};

export const Header: React.FC<Props> = ({
  showIconBack,
  onPressIconBack,
  loading,
}) => (
  <>
    <If condition={loading}>
      <ContainerShimmer>
        <ImageShimmer />
        <MenuShimmer />
      </ContainerShimmer>
    </If>

    <If condition={!loading}>
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
    </If>
  </>
);
