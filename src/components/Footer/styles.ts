import styled from 'styled-components/native';
import {colors} from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${colors.green.primary};
`;

export const Image = styled.Image`
  width: 172px;
  height: 45px;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  text-align: center;
  color: ${colors.white.primary};
  padding: 0 40px;
  line-height: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 60px;
  background-color: ${colors.yellow.secondary};
`;
