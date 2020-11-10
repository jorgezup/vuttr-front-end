import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
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

  textarea {
    width: 100%;
    border: 2px solid black;
    resize: none;
    margin-bottom: 2px;
    margin-top: 8px;
    height: 76px;
  }

`;