import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InformacoesCard from '../../components/Informacoes';
import ListProducts from '../../components/ListProducts';

export default function Dashboard() {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          style={{
            backgroundColor: '#fff',
          }}
        >
          <ListProducts />
          <InformacoesCard />
          <InformacoesCard />
          <InformacoesCard />
          <InformacoesCard />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}