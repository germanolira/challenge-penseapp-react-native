import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  padding: 24px 24px 0px 24px;
`;

export const FormWrapper = styled.View`
  width: 100%;
  height: 91%;
  justify-content: space-between;
  padding: 24px;
`;

export const Fields = styled.View``;