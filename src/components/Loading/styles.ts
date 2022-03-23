import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.secondary};
  align-items: center;
  justify-content: center;
`;

export const LoadingStyled = styled(ActivityIndicator).attrs({
  size: 'large',
  color: colors.green.primary,
})``;
