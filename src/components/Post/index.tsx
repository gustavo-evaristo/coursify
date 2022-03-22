import React from 'react';
import {textReplace} from '../../utils';

import {Container, Image, Text, Content} from './styles';

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
  <Container {...rest}>
    <Image source={{uri}} />
    <Content>
      <Text isTitle isGreen numberOfLines={2}>
        {textReplace(title)}
      </Text>
      <Text isGray isDescription numberOfLines={3}>
        {textReplace(description)}
      </Text>
      <Text onPress={onPress}>Leia Mais</Text>
    </Content>
  </Container>
);
