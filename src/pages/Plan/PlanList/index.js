import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { formatPrice } from '~/util/format';

import history from '~/services/history';
import api from '~/services/api';

import RegisterButton from '~/components/Buttons/RegisterButton';
import { Container, Header, Table, DeleteButton } from './styles';

export default function PlanList() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('/plans');

    const data = response.data.map(plan => ({
      ...plan,
      priceFormatted: formatPrice(plan.price),
    }));

    setPlans(data);
  }

  useEffect(() => {
    loadPlans();
  }, []);

  async function handleDelete(id) {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm('Deseja realmente apagar o plano?') === true) {
        await api.delete(`/plans/${id}`);

        loadPlans();

        toast.success('Plano removido sucesso.');
      }
    } catch (err) {
      toast.error('Erro no cadastro');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando alunos</strong>
        <aside>
          <RegisterButton
            onClick={() => {
              history.push('/plan/register');
            }}
          />
        </aside>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>
                {plan.duration === 1
                  ? `${plan.duration} mês`
                  : `${plan.duration} meses`}
              </td>
              <td>{plan.priceFormatted}</td>
              <td>
                <div>
                  <Link to={`/plan/${plan.id}/edit`}>editar</Link>
                  <DeleteButton
                    onClick={() => handleDelete(plan.id)}
                    type="button"
                  >
                    apagar
                  </DeleteButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
