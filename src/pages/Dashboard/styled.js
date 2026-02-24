import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Modal = styled.div`
  height: 410px;
  width: 90vw;
  background: #FF0033;
  border-radius: 70px;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
  h2 {
    font-weight: 700;
    margin-bottom: 45px;
  }

  .stat{
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const Header = styled.div`
  margin-bottom: 30px;

  .logo {
    width: 400px;
  }
`;

export const MetaComplete = styled.div`
  border: 1px solid black;
  background-color: white;
  color: #ff0033;
  padding: 25px 100px;
  border-radius: 15px;
  margin-top: 40px;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .icon {
    font-size: 1.4em;
    filter: hue-rotate(300deg) saturate(5) brightness(0.7);
  }
`;
