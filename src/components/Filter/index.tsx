import React from 'react';
import {
  Container,
  TextFilter,
  FilterShimmer,
  TextShimmer,
  pickerSelectStyles,
} from './styles';
import {If} from '../If';
import RNPickerSelect, {Item} from 'react-native-picker-select';

type Props = {
  loading: boolean;
  options: Item[];
  onValueChange: (value, index) => void;
  value?: any;
};

export const Filter: React.FC<Props> = ({
  loading,
  options,
  value,
  onValueChange,
}) => {
  return (
    <>
      <If condition={loading}>
        <Container>
          <TextShimmer />
          <FilterShimmer />
        </Container>
      </If>
      <If condition={!loading}>
        <Container>
          <TextFilter>ORDENAR POR</TextFilter>
          <RNPickerSelect
            placeholder={{label: 'A-Z', value: 'ASC'}}
            items={options}
            onValueChange={onValueChange}
            useNativeAndroidPickerStyle={true}
            style={pickerSelectStyles}
            value={value}
          />
        </Container>
      </If>
    </>
  );
};
