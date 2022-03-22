import styled from 'styled-components/native';
import {colors} from '../../theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.primary};
`;

export const Content = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 15px;
`;

export const Text = styled.Text`
  margin: 12px 0;
  font-family: 'Roboto-Bold';

  font-size: 22px;

  color: ${colors.green.tertiary};
`;
