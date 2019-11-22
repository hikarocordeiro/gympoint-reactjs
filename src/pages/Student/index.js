import React from 'react';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  Header,
  Search,
  StudentTable,
  EditButton,
  DeleteButton,
} from './styles';
import RegisterButton from '~/components/Buttons/RegisterButton';

export default function Student() {
  return (
    <Container>
      <Header>
        <strong>Gerenciando alunos</strong>
        <aside>
          <RegisterButton onClick={() => {}} />
          <Search>
            <MdSearch size={20} color="#999999" />
            <input placeholder="Buscar aluno" />
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
          <tr>
            <td>Cha Ji-Hum</td>
            <td>examplet@rocketseat.com.br</td>
            <td>20</td>
            <td>
              <div>
                <EditButton type="button">editar</EditButton>
                <DeleteButton type="button">apagar</DeleteButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>Cha Ji-Hum</td>
            <td>examplet@rocketseat.com.br</td>
            <td>20</td>
            <td>
              <div>
                <EditButton type="button">editar</EditButton>
                <DeleteButton type="button">apagar</DeleteButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>Cha Ji-Hum</td>
            <td>examplet@rocketseat.com.br</td>
            <td>20</td>
            <td>
              <div>
                <EditButton type="button">editar</EditButton>
                <DeleteButton type="button">apagar</DeleteButton>
              </div>
            </td>
          </tr>
        </tbody>
      </StudentTable>
    </Container>
  );
}
