import styled from 'styled-components/native';

import {colors} from '../../theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.primary};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  vertical: true,
})``;

export const Content = styled.View`
  padding: 0 15px;
`;

export const ContainerPosts = styled.View`
  margin-top: 20px;
  flex: 1;
`;

export const ContentPosts = styled.FlatList.attrs({
  horizontal: true,
  numColumns: 1,
  showsHorizontalScrollIndicator: false,
})``;

export const ContentItems = styled.View`
  padding: 0 15px;
`;
