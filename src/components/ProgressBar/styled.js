import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 50px;
  background: #d8d2d2ff;
  overflow: hidden;
  box-shadow: 0 5px 5px 0 black;

  .fill {
    display: flex;
    height: 100%;
    border: none;
  }

  .block {
    flex: 1;
    transition: 0.3s;
    background: transparent;
  }

  .block.active.color1 {
    background: #fb94a6;
    box-shadow: 0 5px 5px 0 black;
  }

  .block.active.color2 {
    background: #f7718aff;
    position: relative;
    box-shadow: 0 5px 5px 0 black;
  }

  .block.last.active.color2 {
    background: #f7718aff;
    position: relative;
    box-shadow: 0 5px 5px 0 black;
  }

  .percentage {
    position: absolute;
    top: 25%;
    right: -20px;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-size: 1.2rem;
  }

  .fill-text {
    position: absolute;
    top: 25%;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-size: 1.2rem;
  }
`;
