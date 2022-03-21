import styled from 'styled-components/native';
import {colors} from '../../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  margin: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextFilter = styled.Text`
  font-size: 17px;

  font-family: 'Roboto-Regular';

  color: ${colors.grey.tertiary};
`;

export const ContentFilter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border: 1px solid ${colors.white.tertiary};

  border-radius: 10px;

  width: 80px;
  height: 40px;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: 'arrow-right',
  size: 20,
})``;
