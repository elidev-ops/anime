import styled from 'styled-components';

export const Container = styled.div`
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
  font-family: 'Nunito', sans-serif !important;

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
  font-family: 'Nunito', sans-serif !important;
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
    position: relative;

    button {
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 4px;

      svg {
        stroke: rgba(255, 255, 255, 0.3);
      }
    }

    a {
      text-decoration: none;

      span {
        font-size: 14px;
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
export const Favorites = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  max-height: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    margin-left: 150px;
    margin-bottom: 10px;
    color: #cc0034;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 200px;
      height: 130px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transform: scale(1);
      transition: all ease-in-out 300ms;
      span {
        z-index: 4;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
      }

      img {
        position: absolute;
        top: -50%;
        left: 0;
        z-index: 1;
      }

      strong {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        color: #fff;
        background-image: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
        padding: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all ease-in-out 300ms;
      }

      & + a {
        margin-left: 10px;
      }

      & > strong,
      & > span {
        display: none;
      }

      &:hover {
        border: 2px solid #fff;
        transform: scale(1.5);
        z-index: 99999;
      }

      &:hover + a {
        margin-left: 5em;
      }

      &:hover > strong,
      &:hover > span {
        display: flex;
      }
    }
  }
`;
