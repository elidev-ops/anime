import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 150px;
    margin-bottom: 30px;
    color: #cc0034;
  }
`;
export const Search = styled.div`
  width: 100%;
  max-width: 360px;
  background-color: #cc0034;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: row;

  form {
    width: 100%;
    display: flex;

    input {
      width: 100%;
      border: 0;
      padding: 10px;
      border-radius: 2px;
    }

    button {
      border: 0;
      border-radius: 0 2px 2px 0;
      background-color: transparent;
      padding: 10px;
      color: aliceblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Content = styled.ul`
  margin-top: 30px;
  width: 100%;
  max-width: 890px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
  list-style: none;

  li {
    background-color: #1e1e26;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 4px;

    a {
      text-decoration: none;

      span {
        font-size: 12px;
        color: #f1f1f1;
        font-weight: 700;
        margin-bottom: 10px;
        display: flex !important;
        align-items: center;
        justify-content: center;
      }

      img {
        border-radius: 4px;
        width: 50%;
      }
    }
  }
`;
