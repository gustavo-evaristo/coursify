/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Home from './Home';
import api from '../../api';

const HomeContainer = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

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
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const fetchData = async () => {
    await handleCategories();
    await handlePost();
    setLoading(false);
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
    />
  );
};

export default HomeContainer;
