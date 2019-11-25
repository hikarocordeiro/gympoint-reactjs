import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
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

  aside {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0px;
      border-radius: 4px;
      height: 36px;
      font-size: 14px;
      font-weight: bold;
      width: 112px;
      display: flex;
      align-items: center;
      color: #fff;

      strong {
        font-size: 14px;
        margin-left: 8px;
      }

      svg {
        margin-left: 16px;
        line-height: 23px;
      }
    }
  }
`;

export const BackButton = styled.button`
  margin-right: 16px;
  background: #cccccc;
`;

export const SaveButton = styled.button`
  background: #ee4d64;
`;
