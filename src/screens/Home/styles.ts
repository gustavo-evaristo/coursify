import styled from 'styled-components/native';
import {colors} from '../../theme';
import {Category, Filter, Header} from '../../components';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white.primary};
`;

export const HeaderStyled = styled(Header)``;

export const Container = styled.View`
  flex: 1;
  padding: 30px 15px 20px;
`;

export const CategoryStyled = styled(Category)``;

export const FilterStyled = styled(Filter)``;
