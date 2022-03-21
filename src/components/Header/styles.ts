import styled from 'styled-components/native';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  width: 100%;
  height: 8%;
  background-color: #fff;
  shadow-color: ${colors.gray.tertiary};
  elevation: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Image = styled.Image`
  width: 169px;
  height: 50px;
`;

export const MenuContent = styled.View`
  width: 37px;
  height: 37px;
  border-radius: 50px;
  background-color: ${colors.green.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled(Icon).attrs({
  name: 'menu',
  size: 25,
  color: colors.white.primary,
})``;
