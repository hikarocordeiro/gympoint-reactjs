import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Student() {
  api.get('/students');
  return <h1>Students</h1>;
}
