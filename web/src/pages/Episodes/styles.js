import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  a {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    margin: 0 auto;
    color: #f1f1f1;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 50px;

  div {
    color: #f1f1f1;
    div {
      width: 100%;
      max-width: 660px;
      display: flex;

      span {
        width: 350px;

        img {
          width: 100% !important;
          border-radius: 4px;
        }
      }

      div {
        margin-left: 30px;
        flex-direction: column;
        width: 100%;

        strong {
          margin-bottom: 15px;
        }
      }
    }
    h1 {
      font-size: 24px;
      margin-bottom: 30px;
      color: #cc0034;
    }
  }
  ul {
    margin-left: 50px;
    margin-top: 60px;
    list-style: none;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2px;

      a {
        width: 48px;
        height: 48px;
        text-decoration: none;
        color: #07d962;
        border-radius: 9000px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 300ms linear, color 100ms linear;

        &:hover {
          color: #19181f;
          background-color: #07d962;
        }

        & + a {
          margin-left: 10px;
        }
      }
      h3 {
        font-size: 16px;
        margin-right: 30px;
        color: #f1f1f1;
      }
    }
  }
`;
