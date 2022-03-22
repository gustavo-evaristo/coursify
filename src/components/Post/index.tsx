import React from 'react';

import {Container, Image, Text} from './styles';

type Props = {
  title: string;
  description: string;
  uri: string;
  onPress: () => void;
};

export const Post: React.FC<Props> = ({
  title,
  description,
  uri,
  onPress,
  ...rest
}) => (
  <Container {...{...rest, onPress}}>
    <Image source={{uri}} />
    <Text isTitle isGreen numberOfLines={2}>
      {title?.replace(/<[^>]+>/g, '')}
    </Text>
    <Text isGray isDescription numberOfLines={3}>
      {description?.replace(/<[^>]+>/g, '')}
    </Text>
    <Text>Leia Mais</Text>
  </Container>
);
