import React from 'react';
import {RefreshControl} from 'react-native';
import {Header, If} from '../../components';

import {Wrapper, Text, Content} from './styles';

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
        }
      />
      <Text>{data?.title.rendered}</Text>
    </If>
  </Wrapper>
);

export default Post;
