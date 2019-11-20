import React from 'react';

import { Container, Content } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GymPoint" />

        <form>
          <label>SEU E-MAIL</label>
          <input type="email" placeholder="exemplo@email.com" />
          <label>SUA SENHA</label>
          <input type="password" placeholder="*************" />

          <button type="submit">Entrar no sistema</button>
        </form>
      </Content>
    </Container>
  );
}
