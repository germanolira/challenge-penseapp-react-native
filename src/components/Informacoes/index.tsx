import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import {
  Container,
  ContainerWrapper,
  Title,
} from './styles';

export default function InformacoesCard() {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <ImageBackground
            source={require('../../assets/images/aurora.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <Title>Promoção inverno</Title>
          </ImageBackground>
        </ContainerWrapper>
      </Container>
    </>
  )
}