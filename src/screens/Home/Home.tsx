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
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  handleFilter: (value: string) => void;
};

const Home: React.FC<Props> = ({
  posts,
  categories,
  loading,
  refreshing,
  onRefresh,
  toPost,
  selectedValue,
  setSelectedValue,
  handleFilter,
}) => {
  const options = [{label: 'Z-A', value: 'DSC'}];
  return (
    <Wrapper>
      <Header />
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ContentItems>
          <Filter
            options={options}
            onValueChange={value => {
              setSelectedValue(value);
              handleFilter(value);
            }}
            value={selectedValue}
          />
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
  );
};

export default Home;
