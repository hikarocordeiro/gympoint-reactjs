import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  Header,
  Search,
  StudentTable,
  DeleteButton,
} from './styles';
import RegisterButton from '~/components/Buttons/RegisterButton';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  async function loadStudents() {
    const response = await api.get('/students');

    setStudents(response.data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleDelete(id) {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm('Deseja realmente apagar o estudate?') === true) {
        await api.delete(`/students/${id}`);

        loadStudents();

        toast.success('Aluno removido sucesso.');
      }
    } catch (err) {
      toast.error('Erro no cadastro');
    }
  }

  async function handleSearch(e) {
    const { value } = e.target;

    if (value) {
      const response = await api.get('/students', {
        params: {
          name: value,
        },
      });

      setStudents(response.data);
    } else {
      loadStudents();
    }
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando alunos</strong>
        <aside>
          <RegisterButton
            onClick={() => {
              history.push('/student/register');
            }}
          />
          <Search>
            <MdSearch size={20} color="#999999" />
            <input placeholder="Buscar aluno" onChange={handleSearch} />
          </Search>
        </aside>
      </Header>
      <StudentTable>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <div>
                  <Link to={`/student/${student.id}/edit`}>editar</Link>
                  <DeleteButton
                    onClick={() => handleDelete(student.id)}
                    type="button"
                  >
                    apagar
                  </DeleteButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
    </Container>
  );
}
