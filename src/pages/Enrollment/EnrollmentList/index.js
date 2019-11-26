import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdCheckCircle } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import RegisterButton from '~/components/Buttons/RegisterButton';
import { Container, Header, Table, DeleteButton } from './styles';

export default function EnrollmentList() {
  const [enrollments, setEnrolments] = useState([]);

  async function loadEnrollments() {
    const response = await api.get('/enrollments');

    const data = response.data.map(enrollment => ({
      ...enrollment,
      formattedStartDate: format(
        parseISO(enrollment.start_date),
        "d 'de' MMMM 'de' yyyy",
        { locale: pt }
      ),
      formattedEndDate: format(
        parseISO(enrollment.end_date),
        "d 'de' MMMM 'de' yyyy",
        { locale: pt }
      ),
    }));

    setEnrolments(data);
  }

  useEffect(() => {
    loadEnrollments();
  }, []);

  async function handleDelete(id) {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm('Deseja realmente apagar o plano?') === true) {
        await api.delete(`/plans/${id}`);

        loadEnrollments();

        toast.success('Plano removido sucesso.');
      }
    } catch (err) {
      toast.error('Erro no cadastro');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando matrículas</strong>
        <aside>
          <RegisterButton
            onClick={() => {
              history.push('/enrollment/register');
            }}
          />
        </aside>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map(enrollment => (
            <tr key={enrollment.id}>
              <td>{enrollment.student.name}</td>
              <td>{enrollment.plan.title}</td>
              <td>{enrollment.formattedStartDate}</td>
              <td>{enrollment.formattedEndDate}</td>
              <td>
                {enrollment.active ? (
                  <MdCheckCircle color="#42CB59" height="23px" />
                ) : (
                  <MdCheckCircle color="#DDDDDD" height="23px" />
                )}
              </td>
              <td>
                <div>
                  <Link to={`/enrollment/${enrollment.id}/edit`}>editar</Link>
                  <DeleteButton
                    onClick={() => handleDelete(enrollment.id)}
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
