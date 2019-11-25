import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px 30px;
  color: #444444;
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    color: #444;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    font-size: 16px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  span {
    color: red;
  }
`;

export const InLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;

    input {
      width: 270px;
    }
  }
`;
