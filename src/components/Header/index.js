import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />

          <Link to="/student">ALUNOS</Link>
          <Link to="/plan">PLANOS</Link>
          <Link to="/enrollment">MATRÍCULAS</Link>
          <Link to="/help">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <strong>Administrador</strong>
          <button type="button">sair do sistema</button>
        </aside>
      </Content>
    </Container>
  );
}
