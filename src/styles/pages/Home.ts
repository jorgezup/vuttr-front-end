import { shade } from 'polished';
import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex; 
  min-height: 100vh; /* height 100%*/
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 50px; 

`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 48px;

  margin-bottom: 16px;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
`;

export const HeaderMain = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;



  > input {
    border: 2px solid black;
    margin-right: 12px;
    padding: 4px;
  }

  > button#tags {
    width: 14px;
    height: 14px;
    margin-right: 8px;
    border: 1px solid black;
    border-radius: 2px;
    position: relative;

    > svg {
      display: none;
      visibility: hidden;
    }
  }

  button#tags.checked {
    > svg {
      display: block;
      visibility:visible;
      position: absolute;
      top: -8px;
      left: -4px;
    }
    
  }



`;


export const ButtonHeaderMain = styled.button`
    margin-left: auto;
    padding: 2px 8px;
    background: #fff;
    width: 86px;
    border: 2px solid black;
    box-shadow: 2px 2px 1px 1px rgba(0,0,0,0.7);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    > span {
      font-family: 'Grandstander';
    }

    &:hover{
      box-shadow: none;
    }
`;


export const Content = styled.div`
  margin: 20px 0;
  padding: 8px;
  border: 2px solid black;
  background: #fff;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;

  FiX {
    margin-left: auto;
  }
`;

export const TitleContent = styled.h1`
  color: blue;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 400;

  margin: 4px 0;
`;

export const ButtonContent = styled.button`
  background: none;
  border: none;
  margin-left: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;


  transition: background 0.2s;

  > span {
    margin-left: 4px;
    font-size:16px;
    font-weight: 600px;
    font-family: 'Grandstander';
  }

  &:hover {
    background: ${shade(0.07, '#fff')};

  }
`;

export const TextContent = styled.p`
  font-size: 14px;
  line-height: 20px;

  margin: 8px 0;

`;

export const TagsContent = styled.p`
  font-size: 14px;
  font-weight: bold;

  margin: 8px 0;
  letter-spacing: 1px;

`;