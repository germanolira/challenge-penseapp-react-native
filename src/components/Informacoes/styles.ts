import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const ContainerWrapper = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;

  background-color: ${({ theme }) => theme.colors.components};
  border-radius: 10px;
`;

export const Title = styled.Text`
  padding: 10px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.components}
`;