import styled from 'styled-components/native';
import {colors} from '../../theme';

type PropsText = {
  isDescription: boolean;
};

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.primary};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 auto;
`;

export const Text = styled.Text`
  margin-top: 20px;

  font-family: ${(props: PropsText) =>
    props.isDescription ? 'Roboto-Regular' : 'Roboto-Bold'};

  font-size: ${(props: PropsText) => (props.isDescription ? '16px' : '24px')};

  color: ${(props: PropsText) =>
    props.isDescription ? colors.gray.primary : colors.green.tertiary};

  text-align: justify;

  line-height: ${(props: PropsText) => (props.isDescription ? '27px' : '33px')};
`;

export const Image = styled.Image`
  width: 366px;
  height: 244px;
`;

export const ContentItems = styled.View`
  padding: 0 15px;
`;
