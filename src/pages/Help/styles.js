import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Top = styled.div`
  margin: 0 auto;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #444444;

  strong {
    font-weight: bold;
    font-size: 24px;
  }
`;

export const List = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px 30px;
  border-spacing: 0px;

  thead {
    color: #444444;
    font-size: 16px;
    font-weight: bold;

    th {
      text-align: left;
      padding-bottom: 10px;
    }
  }

  tbody {
    color: #666666;
    & + tr {
      border-top: 1px solid #eee;
    }

    tr {
      td {
        font-size: 16px;
        padding: 15px 0;
        color: #666666;
        border-bottom: 1px solid #eee;
      }

      & + tr:last-child {
        td {
          border: none;
        }
      }
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
        border: 0;
        background: inherit;
        color: #4d85ee;
      }
    }
  }
`;

export const AnswerScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 425px;
    margin: auto;
    background: #ffffff;
    border-radius: 4px;
    padding: 30px;
    strong {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
    }
    span {
      margin-top: 8px;
      margin-bottom: 20px;
      height: 104px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #666666;
    }
    .Answer {
      border: none;
      color: #444444;
      padding: 0px;
    }
    textarea {
      border: 1px solid #ddd;
      background: #fff;
      font-size: 16px;
      height: 127px;
      border-radius: 4px;
      width: 100%;
      padding: 10px;
      color: #666;
      margin-top: 8px;
      font-weight: normal;
    }

    button {
      margin: 15px 0 0;
      height: 45px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
