/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Post from './Post';
import api from '../../api';

const PostContainer: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PostType>();

  const {params} = useRoute<any>();

  const navigation = useNavigation<any>();

  const goBack = () => navigation.goBack();

  const onRefresh = async () => {
    setRefreshing(true);
    await api.getPost(data.id);
    setRefreshing(false);
  };

  const handleMedia = async (id: number) => {
    const response = await api.getMedia(id);

    return response?.media_details?.sizes?.medium_large?.source_url;
  };

  const handlePost = async () => {
    setLoading(true);

    const response = await api.getPost(params.id);
    const media_url = await handleMedia(response.featured_media);

    setData({...response, media_url});

    setLoading(false);
  };

  useEffect(() => {
    handlePost();
  }, []);

  return (
    <Post
      goBack={goBack}
      refreshing={refreshing}
      onRefresh={onRefresh}
      data={data}
      loading={loading}
    />
  );
};

export default PostContainer;
