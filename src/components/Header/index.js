import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo2.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />

          <NavLink to="/student" activeStyle={{ color: '#444444' }}>
            ALUNOS
          </NavLink>
          <NavLink to="/plan" activeStyle={{ color: '#444444' }}>
            PLANOS
          </NavLink>
          <NavLink to="/enrollment" activeStyle={{ color: '#444444' }}>
            MATRÍCULAS
          </NavLink>
          <NavLink to="/help" activeStyle={{ color: '#444444' }}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>

        <aside>
          <strong>Administrador</strong>
          <button type="button">sair do sistema</button>
        </aside>
      </Content>
    </Container>
  );
}
