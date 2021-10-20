import React from 'react';
import { SafeAreaView } from 'react-native';
import InformacoesCard from '../../components/Informacoes';
import ListProducts from '../../components/ListProducts';

export default function Dashboard() {
  return (
    <>
      <SafeAreaView>
        <ListProducts />
        <InformacoesCard />
      </SafeAreaView>
    </>
  )
}