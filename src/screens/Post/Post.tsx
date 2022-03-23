import React from 'react';
import {RefreshControl, View} from 'react-native';
import {Header, If, Footer} from '../../components';
import {textReplace} from '../../utils';

import {
  Wrapper,
  Text,
  Content,
  Image,
  ContentItems,
  ShimmerTitle,
  ShimmerSubTitle,
  ContentShimmer,
  ShimmerSubText,
  ShimmerText,
  ShimmerContentDescription,
  ShimmerImage,
  ShimmerContentImage,
} from './styles';

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
    <If condition={loading}>
      <Header />
      <ContentShimmer>
        <ShimmerTitle />
        <ShimmerSubTitle />
        <ShimmerContentDescription>
          {[0, 1, 2, 3].map(item => (
            <View key={item}>
              <ShimmerText />
              <ShimmerSubText />
            </View>
          ))}
        </ShimmerContentDescription>
        <ShimmerContentImage>
          <ShimmerImage />
        </ShimmerContentImage>
        <ShimmerContentDescription>
          {[0, 1, 2, 3, 4].map(item => (
            <View key={item}>
              <ShimmerText />
              <ShimmerSubText />
            </View>
          ))}
        </ShimmerContentDescription>
      </ContentShimmer>
    </If>
    <If condition={!loading}>
      <Header showIconBack onPressIconBack={goBack} />
      <Content
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ContentItems>
          <Text>{data?.title.rendered}</Text>
          <Text isDescription>{textReplace(data?.excerpt.rendered)}</Text>

          <Image source={{uri: data?.media_url}} />

          <Text isDescription>{textReplace(data?.excerpt.rendered)}</Text>
        </ContentItems>
        <Footer />
      </Content>
    </If>
  </Wrapper>
);

export default Post;
