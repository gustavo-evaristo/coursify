import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {Shimmer} from '../Shimmer';

export const pickerSelectStyles = StyleSheet.create({
  viewContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.gray.secondary,
  },
  placeholder: {
    color: colors.gray.tertiary,
  },
  inputIOS: {
    width: 120,
    height: 50,
  },
  inputAndroid: {
    width: 120,
    height: 50,
  },
});

export const TextShimmer = styled(Shimmer)`
  width: 120px;
  height: 15px;
  border-radius: 4px;
`;

export const FilterShimmer = styled(Shimmer)`
  width: 80px;
  height: 40px;
  border-radius: 10px;
`;

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

  color: ${colors.gray.tertiary};
`;
