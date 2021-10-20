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
import api from '../../services/api';

interface FormData {
  name: string;
  description: string;
  price: string;
  promoPrice: string;
  statusFlag: string;
  imageUrl: string;
  category: string;
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
      price: form.price,
      promoPrice: form.promoPrice,
      statusFlag: form.statusFlag,
      imageUrl: form.imageUrl,
      category: form.category,
    }

    api.post("/", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    console.log(data);
  }

  // Create a Axios post in '/' with data
  // const onSubmit = (data: FormData) => {
  //   console.log(data);
  //   api.post('/', data)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

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
              name="price"
              control={control}
              placeholder="Preço"
              keyboardType='number-pad'
            />

            <InputForm
              name="promoPrice"
              control={control}
              placeholder="Promoção Preço"
              keyboardType='number-pad'
            />

            <InputForm
              name="statusFlag"
              control={control}
              placeholder="Status Flag"
            />

            <InputForm
              name="imageUrl"
              control={control}
              placeholder="Url da imagem"
            />

            <InputForm
              name="category"
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