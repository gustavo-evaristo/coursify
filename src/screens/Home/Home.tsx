import React from 'react';
import {RefreshControl} from 'react-native';
import {
  Wrapper,
  Container,
  ContentPosts,
  ContainerPosts,
  ContentItems,
} from './styles';

import {Post, Category, Filter, Header, If, Footer} from '../../components';

type Props = {
  posts: PostType[];
  categories: CategoryType[];
  loading: boolean;
  onRefresh: () => void;
  refreshing: boolean;
  toPost: (id: number) => void;
};

const Home: React.FC<Props> = ({
  posts,
  categories,
  loading,
  refreshing,
  onRefresh,
  toPost,
}) => {
  return (
    <>
      <If condition={!loading}>
        <Wrapper>
          <Header />
          <Container
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <ContentItems>
              <Filter text="A-Z" />
              {categories.map((category: CategoryType) => (
                <>
                  <Category name={category.name} />
                  <ContainerPosts>
                    <ContentPosts
                      data={posts}
                      keyExtractor={(item: PostType) => String(item.id)}
                      renderItem={({item}) => (
                        <If
                          condition={item.categories.includes(category.id)}
                          key={item.id}>
                          <Post
                            title={item?.title.rendered}
                            description={item?.excerpt.rendered}
                            onPress={() => toPost(item.id)}
                            uri={item?.media_url}
                          />
                        </If>
                      )}
                    />
                  </ContainerPosts>
                </>
              ))}
            </ContentItems>
            <Footer />
          </Container>
        </Wrapper>
      </If>
    </>
  );
};

export default Home;
