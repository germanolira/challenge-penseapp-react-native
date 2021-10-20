import React, { useState } from 'react';
import Button from './Button';
import { Input } from './Input';

import {
  Container,
  Header,
  Title,
  FormWrapper,
  Fields,
} from './style'

export default function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [promocao, setPromocao] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  function handleRegister() {
    const data = {
      name,
      description,
      price,
      promocao,
      status,
      image,
      category,
    }
    console.log(data);
  }

  return (
    <>
      <Container>
        <Header>
          <Title>Página de cadastro</Title>
        </Header>

        <FormWrapper>
          <Fields>
            <Input placeholder="Nome" onChangeText={setName} />
            <Input placeholder="Descrição" onChangeText={setDescription} />
            <Input placeholder="Preço" keyboardType='number-pad' onChangeText={setPrice} />
            <Input placeholder="Promoção Preço" keyboardType='number-pad' onChangeText={setPromocao} />
            <Input placeholder="Status Flag" onChangeText={setStatus} />
            <Input placeholder="Url da imagem" onChangeText={setImage} />
            <Input placeholder="Categoria" onChangeText={setCategory} />
          </Fields>

          <Button
            title="Cadastrar"
            onPress={handleRegister}
          />
        </FormWrapper>
      </Container>
    </>
  )
}