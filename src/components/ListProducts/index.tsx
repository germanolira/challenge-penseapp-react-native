import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Image, StatusBar } from "react-native";
import api from "../../services/api";

import {
  ListaProdutos,
  TitleProduct,
  ImageProduct,
  TitleText,
  ProdutosWrapper,
  TextDescription,
  BottomWrapper,
  BotaoComprar,
  IconHeart,
  TextNovidades,
} from './styles'

export default function ListProducts() {
  const [produtos, setProdutos] = useState<any | null>({});

  useEffect(() => {
    try {
      api.get('http://192.168.3.63:3333/products/name_asc').then((response: any) => {
        setProdutos(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <View>
        <TitleText><TextNovidades>As novidades</TextNovidades>. Veja o que acabou de chegar.</TitleText>
        <ListaProdutos
          data={produtos}
          keyExtractor={(produtos) => String(produtos.id)}
          renderItem={({ item: produtos }) => (
            <>
              <ProdutosWrapper>
                <TitleProduct >{produtos.name}</TitleProduct>
                <ImageProduct source={{ uri: produtos.imageUrl }} />
                <TextDescription>{produtos.description}</TextDescription>
                <BottomWrapper>
                  <BotaoComprar
                    onPress={() => { }}
                    title="Comprar"
                    accessibilityLabel="Este é um botão para comprar o produto"
                  ></BotaoComprar>
                  <IconHeart name="hearto" />
                </BottomWrapper>
              </ProdutosWrapper>
            </>
          )}
        />
        <StatusBar />
      </View>
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   image: {
//     width: 300,
//     height: 300,
//   }
// });