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

  strong {
    font-weight: bold;
    font-size: 24px;
  }

  aside {
    display: flex;
    align-self: center;
    align-items: center;
  }
`;

export const Search = styled.div`
  display: block;
  max-width: 237px;
  height: 36px;
  margin-left: 16px;

  input {
    width: 237px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px;
    color: #999;
    padding: 10px 40px;
  }

  svg {
    position: absolute;
    margin: 12px 15px;
    line-height: 23px;
  }
`;

export const StudentTable = styled.table`
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

      button {
        border: 0;
        background: inherit;
      }
    }
  }
`;

export const EditButton = styled.button`
  color: #4d85ee;
  margin-right: 23px;
`;

export const DeleteButton = styled.button`
  color: #de3b3b;
`;
