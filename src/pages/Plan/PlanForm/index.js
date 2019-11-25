import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

import { Container, Content, InLine } from './styles';
import ContentHeader from '~/components/ContentHeader';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório.'),
  duration: Yup.number()
    .typeError('Informe um número válido')
    .required('A duração é obrigatória'),
  price: Yup.number()
    .typeError('Informe um número válido')
    .required('O preço é obrigatorio'),
});

export default function PlanForm() {
  const { id } = useParams();
  const [plan, setPlan] = useState({});

  async function loadPlan(planId) {
    const response = await api.get(`/plans/${planId}`, {
      params: {
        id: planId,
      },
    });

    setPlan(response.data);
  }

  const totalPrice = useMemo(() => {
    if (plan.duration && plan.price) {
      return formatPrice(plan.duration * plan.price);
    }
    return formatPrice(0);
  }, [plan.duration, plan.price]);

  useEffect(() => {
    if (id) {
      loadPlan(id);
    }
  }, [id]);

  function handleBackPage() {
    history.push('/plan');
  }

  async function handleSubmit({ title, duration, price }) {
    try {
      if (!id) {
        await api.post('/plans', { title, duration, price });

        toast.success('Cadastro realizado com sucesso');
      } else {
        await api.put(`/plans/${id}`, {
          id,
          title,
          duration,
          price,
        });

        toast.success('Cadastro alterado com sucesso');
      }

      history.push('/plan');
    } catch (err) {
      toast.error('Erro no cadastro');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={plan}>
        <ContentHeader title="Cadastro de plano" onClickBack={handleBackPage} />

        <Content>
          <Input type="hidden" name="id" />
          <strong>TÍTULO DO PLANO</strong>
          <Input name="title" placeholder="" />
          <br />
          <InLine>
            <div>
              <strong>DURAÇÃO (em meses)</strong>
              <Input
                name="duration"
                type="number"
                onChange={e => setPlan({ ...plan, duration: e.target.value })}
              />
            </div>

            <div>
              <strong>PREÇO MENSAL</strong>
              <Input
                name="price"
                type="number"
                step=".01"
                onChange={e => setPlan({ ...plan, price: e.target.value })}
              />
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
