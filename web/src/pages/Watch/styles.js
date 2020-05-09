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

  button {
    background-color: transparent;
    border: none;
    margin-left: 20px;
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  div#video {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  video,
  div#video {
    width: 700px;
    height: 394px;
    background-color: #1e1e26;
    border-radius: 4px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 100px;

    button {
      color: #f1f1f1;
      border: none;
      font-weight: 700;
      text-decoration: none;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      transition: all ease-in-out 300ms;
      & + button {
        margin-left: auto;
      }

      &:hover {
        background-color: #07d962;
        color: #19181f;
      }
    }
  }
`;
