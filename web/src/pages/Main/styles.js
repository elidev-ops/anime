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
  }
`;

export const AnimeFavorite = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 100%;
  max-width: 150px;
  min-width: 150px;
  min-height: 100px;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  padding: 10px;
  transition: all linear 100ms;

  & + div {
    margin-left: 10px;
  }
  & > * {
    opacity: 0;
    transition: all linear 100ms;
  }
  &:hover {
    border: 2px solid #f1f1f1;
    transform: translateY(-8px);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 1) 95%
      ),
      url(${(props) => props.url});
  }
  &:hover > * {
    opacity: 1;
  }

  strong {
    font-size: 12px;
    color: #fff;
    position: absolute;
    top: 5px;
  }

  a {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  div {
    position: absolute;
    bottom: 5px;
    right: 5px;

    svg {
      fill: #fff;
    }
  }
`;
