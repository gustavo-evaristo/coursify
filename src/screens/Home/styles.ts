import styled from 'styled-components/native';
import {colors} from '../../theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.primary};
`;

export const Container = styled.ScrollView`
  flex: 1;
  background: blue;
  margin: 0 auto;
`;
