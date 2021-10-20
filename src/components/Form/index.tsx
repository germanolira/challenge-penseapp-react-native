import React, { useState } from 'react';
import Button from './Button';
import { Input } from './Input';
import { useForm } from 'react-hook-form'

import {
  Container,
  Header,
  Title,
  FormWrapper,
  Fields,
} from './style'
import { InputForm } from './InputForm';

interface FormData {
  name: string;
  description: string;
  preco: string;
  promocao: string;
  status: string;
  image: string;
  categoria: string;
}

export default function Form() {

  const {
    control,
    handleSubmit,
  } = useForm();

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      description: form.description,
      price: form.preco,
      promocao: form.promocao,
      status: form.status,
      image: form.image,
      category: form.categoria,
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
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
            />

            <InputForm
              name="description"
              control={control}
              placeholder="Descrição"
            />

            <InputForm
              name="preco"
              control={control}
              placeholder="Preço"
              keyboardType='number-pad'
            />

            <InputForm
              name="promocao"
              control={control}
              placeholder="Promoção Preço"
              keyboardType='number-pad'
            />

            <InputForm
              name="status"
              control={control}
              placeholder="Status Flag"
            />

            <InputForm
              name="image"
              control={control}
              placeholder="Url da imagem"
            />

            <InputForm
              name="categoria"
              control={control}
              placeholder="Categoria"
            />

          </Fields>

          <Button
            title="Cadastrar"
            onPress={handleSubmit(handleRegister)}
          />
        </FormWrapper>
      </Container>
    </>
  )
}