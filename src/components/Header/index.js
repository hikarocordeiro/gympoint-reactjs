import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo2.svg';

import { Container, Content } from './styles';

export default function Header() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <strong>{user.name}</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
