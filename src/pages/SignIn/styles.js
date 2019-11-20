import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 45px 30px;

  img {
    width: 153px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      color: #444;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      font-size: 16px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }

    span {
      font-size: 14px;
      color: #444;
      text-align: left;
      font-weight: bold;
      padding-bottom: 5px;
    }
  }
`;
