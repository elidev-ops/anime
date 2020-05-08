import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 4px;

  a {
    margin-left: 20px;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  div {
    h1 {
      margin-bottom: 30px;
      color: #cc0034;
    }
  }
  ul {
    margin-left: 50px;
    margin-top: 30px;
    list-style: none;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2px;

      a {
        padding: 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #07d962;
        border-radius: 4px;
        transition: all 300ms linear;

        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        & + a {
          margin-left: 10px;
        }

        svg {
          margin-right: 10px;
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
