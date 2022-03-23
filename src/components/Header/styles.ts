import styled from 'styled-components/native';
import {colors} from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  background-color: #fff;
  shadow-color: ${colors.gray.tertiary};
  elevation: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const Image = styled.Image`
  width: 169px;
  height: 50px;
`;

export const MenuContent = styled.View`
  width: 37px;
  height: 37px;
  border-radius: 50px;
  background-color: ${colors.green.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled(Entypo).attrs({
  name: 'menu',
  size: 25,
  color: colors.white.primary,
})``;

export const IconContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconBack = styled(AntDesign).attrs({
  name: 'arrowleft',
  size: 25,
})`
  margin-right: 5px;
`;
