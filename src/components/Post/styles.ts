import styled from 'styled-components/native';
import {colors} from '../../theme';

type PropsText = {
  isTitle: boolean;
  isDescription: boolean;
  isGreen: boolean;
  isGray: boolean;
};

export const Container = styled.View`
  width: 235px;
  height: 325px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  margin: 0 10px 30px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 103px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export const Text = styled.Text`
  margin: 12px 0;
  font-family: ${(props: PropsText) =>
    props.isDescription ? 'Roboto-Regular' : 'Roboto-Bold'};

  font-size: ${(props: PropsText) =>
    props.isTitle ? '22px' : props.isDescription ? '15px' : '16px'};

  color: ${(props: PropsText) =>
    props.isGreen
      ? colors.green.tertiary
      : props.isGray
      ? colors.gray.secondary
      : colors.yellow.primary};

  line-height: ${(props: PropsText) => (props.isDescription ? '25px' : '30px')};
`;
