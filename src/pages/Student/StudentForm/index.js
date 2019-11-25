import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

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
  const { id } = useParams();
  const [student, setStudent] = useState({});

  async function loadStudent(studentId) {
    const response = await api.get(`/students/${studentId}`, {
      params: {
        id: studentId,
      },
    });

    setStudent(response.data);
  }

  useEffect(() => {
    if (id) {
      loadStudent(id);
    }
  }, [id]);

  function handleBackPage() {
    history.push('/student');
  }

  async function handleSubmit({ name, email, age, weight, height }) {
    try {
      if (!id) {
        await api.post('/students', { name, email, age, weight, height });

        toast.success('Cadastro realizado com sucesso');
      } else {
        await api.put(`/students/${id}`, {
          id,
          name,
          email,
          age,
          weight,
          height,
        });

        toast.success('Cadastro alterado com sucesso');
      }

      history.push('/student');
    } catch (err) {
      console.tron.log(err);
      toast.error('Erro no cadastro');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={student}>
        <ContentHeader title="Cadastro de aluno" onClickBack={handleBackPage} />

        <Content>
          <Input type="hidden" name="id" />
          <strong>NOME COMPLETO</strong>
          <Input name="name" placeholder="Jhon Doe" />
          <br />
          <strong>ENDEREÇO DE E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />

          <InLine>
            <div>
              <strong>IDADE</strong>
              <Input name="age" type="text" />
            </div>

            <div>
              <strong>PESO (Em Kg)</strong>
              <Input name="weight" type="text" />
            </div>

            <div>
              <strong>ALTURA</strong>
              <Input name="height" type="text" />
            </div>
          </InLine>
        </Content>
      </Form>
    </Container>
  );
}
