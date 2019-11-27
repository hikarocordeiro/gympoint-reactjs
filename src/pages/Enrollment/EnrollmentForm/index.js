import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import AsyncSelect from 'react-select/lib/Async';
import Select from 'react-select';
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
  // const [studentList, setStudentList] = useState({});

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

  async function filterStudents(inputValue) {
    const value = inputValue.replace(/\W/g, '');

    const response = await api.get('/students', {
      params: {
        name: value,
      },
    });

    const options = response.data.map(student => {
      const option = {};

      option.value = student.id;
      option.label = student.name;

      return option;
    });

    return options;
  }

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterStudents(inputValue));
      }, 1000);
    });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#999999' : '#999999',
    }),
    control: () => ({
      border: '1px solid #dddddd',
      borderRadius: '4px',
      display: 'flex',
      width: '100%',
      height: '45px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#999999',
    }),
  };

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
            defaultOptions
            loadOptions={promiseOptions}
            placeholder="Selecione o aluno..."
            styles={customStyles}
          />
          <br />
          <InLine>
            <div>
              <strong>PLANO</strong>
              <Select name="plan" type="number" styles={customStyles} />
            </div>

            <div>
              <strong>DATA DE INÍCIO</strong>
              <Input name="start_date" />
            </div>

            <div>
              <strong>DATA DE TÉRMINO</strong>
              <Input name="end_date" readOnly />
            </div>

            <div>
              <strong>PREÇO TOTAL</strong>
              <Input name="totalPrice" readOnly value={totalPrice} />
            </div>
          </InLine>
        </Content>
      </Form>
    </Container>
  );
}
