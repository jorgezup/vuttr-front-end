import styled, { keyframes } from 'styled-components'

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ContainerModal = styled.div`

  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;



export const ModalOverlay = styled.div`
  animation: ${appearFromTop} .8s;

  background: white;
  width: 550px;
  padding: 40px;
  box-shadow: 1px 1px 1px 2px black;

  > form {
    width: 100%;

    > h1 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;

      margin-left: auto;
      padding: 2px 8px;
      background: #fff;
      width: 86px;
      height: 26px;
      border: 2px solid black;
      box-shadow: 2px 2px 1px 1px rgba(0,0,0,0.7);

      &:hover {
        box-shadow: none;
      }
    }
  }
`;


export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  > svg {
    margin-left: 0;
    margin-right: 16px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 16px;
`;