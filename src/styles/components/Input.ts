import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-weight: 500;
    font-size: 16px;
  }

  div {
    margin-bottom: 16px;
  }

  input {
    width: 100%;
    height: 26px;
    background: transparent;
    border: 2px solid black;
    margin-top: 8px;
    margin-bottom: 2px;
  }



  svg {
    margin-right: 8px;
  }

`;