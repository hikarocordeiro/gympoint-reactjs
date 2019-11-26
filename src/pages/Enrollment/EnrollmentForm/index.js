import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import AsyncSelect from 'react-select/async';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

import { Container, Content, InLine } from './styles';
import ContentHeader from '~/components/ContentHeader';

const schema = Yup.object().shape({
  student: Yup.string().required('Informe o aluno'),
  plan: Yup.string().required('Informe o plano'),
  start_date: Yup.string().required('Informe a data de início'),
});

export default function EnrollmentForm() {
  const { id } = useParams();
  const [enrollment, setEnrollments] = useState({});
  const [studentList, setStudentList] = useState({});

  async function loadEnrollment(enrollmentId) {
    const response = await api.get(`/enrollments/${enrollmentId}`, {
      params: {
        id: enrollmentId,
      },
    });

    setEnrollments(response.data);
  }

  const totalPrice = useMemo(() => {
    if (enrollment.duration && enrollment.price) {
      return formatPrice(enrollment.duration * enrollment.price);
    }
    return formatPrice(0);
  }, [enrollment.duration, enrollment.price]);

  useEffect(() => {
    if (id) {
      loadEnrollment(id);
    }
  }, [id]);

  function handleBackPage() {
    history.push('/enrollment');
  }

  async function handleSubmit({ student, plan, start_date }) {
    try {
      if (!id) {
        await api.post('/enrollments', { student, plan, start_date });

        toast.success('Cadastro realizado com sucesso');
      } else {
        await api.put(`/enrollments/${id}`, {
          id,
          student,
          plan,
          start_date,
        });

        toast.success('Cadastro alterado com sucesso');
      }

      history.push('/enrollment');
    } catch (err) {
      toast.error('Erro no cadastro');
    }
  }

  async function handleStudentSelect(newValue) {
    const { value } = newValue.replace(/\W/g, '');

    // if (value) {
    const response = await api.get('/students', {
      params: {
        name: value,
      },
    });
    // callback(response);
    setStudentList(response.data);
    // }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={enrollment}>
        <ContentHeader
          title="Cadastro de matrícula"
          onClickBack={handleBackPage}
        />

        <Content>
          <Input type="hidden" name="id" />
          <strong>ALUNO</strong>
          <AsyncSelect
            cacheOptions
            // loadOptions={studentList}
            defaultOptions
            // onInputChange={handleStudentSelect}
          />
          <br />
          <InLine>
            <div>
              <strong>PLANO</strong>
              <Input name="duration" type="number" />
            </div>

            <div>
              <strong>DATA DE INÍCIO</strong>
              <Input name="price" type="number" step=".01" />
            </div>

            <div>
              <strong>PREÇO TOTAL</strong>
              <Input
                name="totalPrice"
                type="text"
                readOnly
                value={totalPrice}
              />
            </div>
          </InLine>
        </Content>
      </Form>
    </Container>
  );
}
