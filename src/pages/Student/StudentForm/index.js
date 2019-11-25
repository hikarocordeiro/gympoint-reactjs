import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import history from '~/services/history';

import { Container, Content, InLine } from './styles';
import ContentHeader from '~/components/ContentHeader';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório.'),
  age: Yup.number()
    .typeError('Informe um número válido')
    .required('A idade é obrigatória'),
  weight: Yup.number()
    .typeError('Informe um número válido')
    .required('O peso é obrigatorio'),
  height: Yup.number()
    .typeError('Informe um número válido')
    .required('A altura é obrigatória'),
});

export default function StudentForm() {
  function handleBackPage() {
    history.push('/student');
  }

  function handleSubmit({ name, email, age, weight, height }) {
    console.tron.log({ name, email, age, weight, height });
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ContentHeader
          title="Cadastro de aluno"
          onClickBack={handleBackPage}
          onClickSave={handleSubmit}
        />

        <Content>
          <strong>NOME COMPLETO</strong>
          <Input name="name" placeholder="Jhon Doe" />
          <br />
          <strong>ENDEREÇO DE E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />

          <InLine>
            <div>
              <strong>IDADE</strong>
              <Input name="age" type="number" />
            </div>

            <div>
              <strong>PESO (Em Kg)</strong>
              <Input name="weight" type="number" />
            </div>

            <div>
              <strong>ALTURA</strong>
              <Input name="height" type="number" />
            </div>
          </InLine>
        </Content>
      </Form>
    </Container>
  );
}
