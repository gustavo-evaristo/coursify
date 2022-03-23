/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Home from './Home';
import api from '../../api';
import {sortAsc, sortDsc, someViews} from '../../utils';

const HomeContainer = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const navigation = useNavigation<any>();

  const toPost = (id: number) => navigation.navigate('POST', {id});

  const handleMedia = async (id: number) => {
    const response = await api.getMedia(id);

    return response?.media_details?.sizes?.medium_large?.source_url;
  };

  const handleCategories = async () => {
    const response = await api.getCategories();

    setCategories([...response]);
  };

  const handlePost = async () => {
    const response = await api.getPosts();

    response.map(async item => {
      const media_url = await handleMedia(item.featured_media);

      setPosts(old => [...old, {...item, media_url}]);
    });

    const views = someViews(response);

    console.log(views);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const fetchData = async () => {
    await handlePost();
    await handleCategories();
    setLoading(false);
  };

  const handleFilter = (value: string) => {
    if (value !== selectedValue) {
      if (value === 'ASC') {
        return setCategories(categories.sort(sortAsc));
      }
      if (value === 'DSC') {
        return setCategories(categories.sort(sortDsc));
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Home
      posts={posts}
      categories={categories}
      loading={loading}
      onRefresh={onRefresh}
      refreshing={refreshing}
      toPost={toPost}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      handleFilter={handleFilter}
    />
  );
};

export default HomeContainer;
