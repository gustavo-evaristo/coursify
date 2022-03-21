import styled from 'styled-components/native';
import {colors} from '../../theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.primary};
`;

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  /* font-family: 'Roboto-Bold'; */
  font-size: 30px;
`;
