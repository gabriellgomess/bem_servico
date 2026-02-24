import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 100px;
  background: #d8d2d2ff;

  .fill {
    display: flex;
    height: 150px;
    border: none;
    height: 100%;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }

  .block {
    flex: 1;
    transition: 0.3s;
    background: transparent;
  }

  .block.active.color1 {
    background: #fb94a6;
  }

  .block.active.color2 {
    background: #f7718aff;
    position: relative;
  }

  .block.last.active.color2 {
    background: #f7718aff;
    position: relative;
  }

  .percentage {
    position: absolute;
    top: 25%;
    right: -20px;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .fill-text {
    position: absolute;
    top: 25%;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-size: 1.2rem;
  }
`;
