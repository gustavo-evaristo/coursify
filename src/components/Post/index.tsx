import React from 'react';

import {Container, Image, Text} from './styles';
import Imagepost from '../../assets/images/image.png';

type Props = {
  title: string;
  description: string;
  onPress: () => void;
};

export const Post: React.FC<Props> = ({
  title,
  description,
  onPress,
  ...rest
}) => (
  <Container {...{...rest, onPress}}>
    <Image source={Imagepost} />
    <Text isTitle isGreen numberOfLines={2}>
      {title}
    </Text>
    <Text isGray isDescription numberOfLines={4}>
      {description}
    </Text>
    <Text>Leia Mais</Text>
  </Container>
);
