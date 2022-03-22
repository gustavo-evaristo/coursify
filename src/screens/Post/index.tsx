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
    await //
    setRefreshing(false);
  };

  const handlePost = async () => {
    setLoading(true);
    const response = await api.getPost(params.id);
    setData(response);
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
