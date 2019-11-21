import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    console.tron.log(response.data);

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/student');
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
