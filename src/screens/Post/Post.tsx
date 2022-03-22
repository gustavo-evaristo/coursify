import React from 'react';
import {RefreshControl} from 'react-native';
import {Header, If} from '../../components';
import {textReplace} from '../../utils';

import {Wrapper, Text, Content, Image} from './styles';

type Props = {
  refreshing: boolean;
  onRefresh: () => void;
  data: PostType;
  goBack: () => void;
  loading: boolean;
};

const Post: React.FC<Props> = ({
  refreshing,
  onRefresh,
  loading,
  data,
  goBack,
}) => (
  <Wrapper>
    <If condition={!loading}>
      <Header showIconBack onPressIconBack={goBack} />
      <Content
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>{data?.title.rendered}</Text>
        <Text isDescription>{textReplace(data?.excerpt.rendered)}</Text>

        <Image source={{uri: data?.media_url}} />

        <Text isDescription>{textReplace(data?.excerpt.rendered)}</Text>
      </Content>
    </If>
  </Wrapper>
);

export default Post;
