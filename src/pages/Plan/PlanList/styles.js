import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  height: 86px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #444444;

  > strong {
    font-weight: bold;
    font-size: 24px;
  }

  aside {
    font-size: 14px;
    display: flex;
    align-self: center;
    align-items: center;
  }
`;

export const Table = styled.table`
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

    th:nth-of-type(2),
    th:nth-of-type(3) {
      text-align: center;
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

      td:nth-of-type(2),
      td:nth-of-type(3) {
        text-align: center;
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

      a {
        font-size: 14px;
        color: #4d85ee;
        margin-right: 23px;
      }

      button {
        border: 0;
        background: inherit;
      }
    }
  }
`;

export const DeleteButton = styled.button`
  color: #de3b3b;
`;
