import React from 'react';
import {RefreshControl} from 'react-native';
import {Wrapper, Container, ContentPosts, ContainerPosts} from './styles';

import {Post, Category, Filter, Header, If} from '../../components';

type Props = {
  posts: PostType[];
  categories: CategoryType[];
  loading: boolean;
  onRefresh: () => void;
  refreshing: boolean;
};

const Home: React.FC<Props> = ({posts, loading, refreshing, onRefresh}) => {
  return (
    <If condition={!loading}>
      <Wrapper>
        <Header />
        <Container
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Filter text="A-Z" />
          <Category name="CURSOS ONLINE" />
          <ContainerPosts>
            <ContentPosts
              data={posts}
              renderItem={({item}) => (
                <Post
                  key={item.id}
                  title={item?.title.rendered}
                  description={item?.excerpt.rendered}
                  onPress={() => {}}
                  uri={item?.media_url}
                />
              )}
            />
          </ContainerPosts>
        </Container>
      </Wrapper>
    </If>
  );
};

export default Home;
