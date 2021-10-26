import React, { useState, useCallback } from "react";
import { View, StatusBar } from "react-native";
import api from "../../services/api";
import { useFocusEffect } from '@react-navigation/native';


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
  BotaoDelete,
} from './styles'
import axios from "axios";

export default function ListProducts() {
  const [produtos, setProdutos] = useState<any>([]);

  async function loadData() {
    try {
      // Coloque o seu IP aqui
      await api.get('http://{192.168.3.63}:3333/products/name_asc').then((response: any) => {
        setProdutos(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  function deletePost(id: string) {
    axios.delete(`http://{192.168.3.63}:3333/products/${id}`)

    loadData();
  }

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
                <BotaoDelete
                  title="Deletar"
                  onPress={() => { deletePost(produtos.id) }}
                  accessibilityLabel="Este é um botão para deletar o produto"
                />
              </ProdutosWrapper>
            </>
          )}
        />
        <StatusBar />
      </View>
    </>
  )
}