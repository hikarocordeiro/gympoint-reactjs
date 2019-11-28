import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  format,
  addMonths,
  setHours,
  setMinutes,
  setSeconds,
  endOfSecond,
  parseISO,
} from 'date-fns';

import pt from 'date-fns/locale/pt-BR';

import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { formatPrice } from '~/util/format';
import api from '~/services/api';
import history from '~/services/history';

import ContentHeader from '~/components/ContentHeader';
import InputAsyncSelect from '~/components/InputAsyncSelect';
import DatePicker from '~/components/InputDatePicker';
import ReactSelect from '~/components/InputSelect';

import { Container, Content, InLine } from './styles';

const schema = Yup.object().shape({
  student: Yup.object()
    .shape({
      value: Yup.number().integer(),
    })
    .typeError('Valor inválido')
    .required('Aluno obrigatório'),
  plan: Yup.object()
    .shape({
      value: Yup.number().integer(),
    })
    .typeError('Valor inválido')
    .required('Aluno obrigatório'),
  start_date: Yup.date()
    .typeError('Valor inválido')
    .required('Data obrigatória'),
});

export default function RegisterEnrollment() {
  const { id } = useParams();

  const [startDate, setStartDate] = useState(new Date());
  const [plans, setPlans] = useState({});
  const [plan, setPlan] = useState({});

  const [newStudent, setNewStudent] = useState({});

  const end_date = useMemo(() => {
    if (!plan.duration) {
      return '';
    }
    const { duration } = plan;
    const formattedDate = format(
      addMonths(startDate, duration),
      "dd'/'MM'/'yyyy",
      {
        locale: pt,
      }
    );
    return formattedDate;
  }, [plan, startDate]);

  const totalPrice = useMemo(() => {
    if (!plan.price) return '';

    return formatPrice(Number(plan.duration) * Number(plan.price));
  }, [plan.duration, plan.price]);

  useEffect(() => {
    async function loadManageEnrollment() {
      const loadPlans = await api
        .get('plans')
        .then(r => r.data)
        .then(d =>
          d.map(p => ({
            label: p.title,
            value: p.id,
            duration: p.duration,
            price: p.price,
          }))
        );

      if (id) {
        const enrollment = await api
          .get('enrollments')
          .then(r => r.data)
          .then(d => d.filter(e => e.id === Number(id)));

        setStartDate(parseISO(enrollment[0].start_date));
        setNewStudent({
          label: enrollment[0].student.name,
          value: enrollment[0].student.id,
        });

        if (enrollment[0].plan) {
          const defaultPlan = loadPlans.filter(
            p => p.value === enrollment[0].plan.id
          );
          setPlan(defaultPlan[0]);
        }
      }
      setPlans(loadPlans);
    }

    loadManageEnrollment();
  }, [id]);

  const initialData = useMemo(() => {
    if (!!end_date && !!newStudent && !!plan && !!startDate && !!totalPrice) {
      return {
        end_date,
        totalPrice,
        plan,
        start_date: startDate,
        student: newStudent,
      };
    }
    return {};
  }, [end_date, newStudent, plan, startDate, totalPrice]);

  async function handleSubmit(data) {
    try {
      const dateNow = new Date();
      const startDateNow = endOfSecond(
        setSeconds(
          setMinutes(
            setHours(data.start_date, dateNow.getHours()),
            dateNow.getMinutes()
          ),
          dateNow.getSeconds()
        )
      );
      await api.post('enrollments', {
        student_id: data.student.value,
        plan_id: data.plan.value,
        start_date: startDateNow,
      });
      toast.success('Cadastro realizado com sucesso');
      history.push('/enrollment');
    } catch (e) {
      toast.error('erro no cadastro');
    }
  }

  async function loadOptions(inputValue) {
    const response = await api
      .get('students', { params: { name: `${inputValue}` } })
      .then(r => r.data)
      .then(r =>
        r.map(student => ({
          label: student.name,
          value: student.id,
        }))
      );
    return response;
  }

  function handleBackPage() {
    history.push('/enrollment');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
        <ContentHeader
          title="Cadastro de matrícula"
          onClickBack={handleBackPage}
        />

        <Content>
          <Input type="hidden" name="id" />
          <strong>ALUNO</strong>
          <InputAsyncSelect
            name="student"
            loadOptions={loadOptions}
            defaultValue={newStudent}
          />
          <br />
          <InLine>
            <div>
              <strong>PLANO</strong>
              <ReactSelect name="plan" options={plans} setChange={setPlan} />
            </div>

            <div>
              <strong>DATA DE INÍCIO</strong>
              <DatePicker name="start_date" setChange={setStartDate} />
            </div>

            <div>
              <strong>DATA DE TÉRMINO</strong>
              <Input
                type="data"
                name="end_date"
                readOnly
                className="readOnly"
              />
            </div>

            <div>
              <strong>PREÇO TOTAL</strong>
              <Input
                type="text"
                name="totalPrice"
                readOnly
                className="readOnly"
              />
            </div>
          </InLine>
        </Content>
      </Form>
    </Container>
  );
}
