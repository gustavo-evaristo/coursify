import React from 'react';
import {Container, TextFilter, pickerSelectStyles} from './styles';
import RNPickerSelect, {Item} from 'react-native-picker-select';

type Props = {
  options: Item[];
  onValueChange: (value, index) => void;
  value?: any;
};

export const Filter: React.FC<Props> = ({options, value, onValueChange}) => (
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
);
