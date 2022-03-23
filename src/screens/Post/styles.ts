import styled from 'styled-components/native';
import {colors} from '../../theme';
import {Shimmer} from '../../components';

type PropsText = {
  isDescription: boolean;
};

export const ShimmerContent = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 15px;
`;

export const ShimmerHeader = styled.View`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ShimmerIcon = styled(Shimmer)`
  width: 200px;
  height: 35px;
  border-radius: 4px;
`;

export const ShimmerMenu = styled(Shimmer)`
  width: 35;
  height: 35px;
  border-radius: 50px;
`;

export const ShimmerTitle = styled(Shimmer)`
  margin-top: 10px;
  width: 300px;
  height: 10px;
  border-radius: 4px;
`;

export const ShimmerSubTitle = styled(Shimmer)`
  margin-top: 10px;
  width: 200px;
  height: 10px;
  border-radius: 4px;
`;

export const ShimmerContentDescription = styled.View`
  margin-top: 40px;
`;

export const ShimmerText = styled(Shimmer)`
  margin-top: 12px;
  width: 300px;
  height: 10px;
  border-radius: 4px;
`;

export const ShimmerSubText = styled(Shimmer)`
  margin-top: 12px;
  width: 250px;
  height: 10px;
  border-radius: 4px;
`;

export const ShimmerContentImage = styled.View`
  margin: 40px auto 0;
`;

export const ShimmerImage = styled(Shimmer)`
  width: 300px;
  height: 200px;
  border-radius: 8px;
`;

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
