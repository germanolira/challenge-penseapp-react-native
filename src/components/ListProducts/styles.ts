import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

export const TitleText = styled.Text`
  padding: 34px;
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ListaProdutos = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 15 }
})`
  background-color: ${({ theme }) => theme.colors.components};
`;

export const ProdutosWrapper = styled.View`
  width: 250px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.components};

  padding-left: 20px;

  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  `;

export const TitleProduct = styled.Text`
  text-align: left;
  font-size: ${RFValue(18)}px;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ImageProduct = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(150)}px;
`;

export const TextDescription = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.description};

  padding-top: 10px;
`;

export const BottomWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoComprar = styled.Button.attrs({
  color: "#007AFF"
})`
  width: 50px;
  height: 50px;
  font-size: ${RFValue(18)}px;
  padding-bottom: 10px;
`;

export const IconHeart = styled(AntDesign)`
  margin-right: 15px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextNovidades = styled.Text`
  color: ${({ theme }) => theme.colors.principal};
`;

export const BotaoDelete = styled.Button.attrs({
  color: "#FF0000"
})`
  width: 50px;
  height: 50px;
  font-size: ${RFValue(18)}px;

  padding-top: 10px;
`;