import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  padding: 0px 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding: 5px 30px;
      border-right: 1px solid #dddddd;
    }
    a {
      margin-right: 20px;
      font-weight: bold;
      font-size: 15px;
      color: #999999;
    }
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    strong {
      color: #666666;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    button {
      background: inherit;
      color: #de3b3b;
      font-size: 14px;
      height: auto;
      font-weight: normal;
      border: none;
    }
  }
`;
