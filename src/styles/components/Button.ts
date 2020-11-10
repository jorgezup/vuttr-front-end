import styled from "styled-components";


export const Container = styled.button`
    padding: 2px 10px;
    background: #fff;
    border: 2px solid black;
    box-shadow: 2px 2px 1px 1px rgba(0,0,0,0.7);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    font-weight: 500;

    &:hover {
        box-shadow: none;
    }


    > svg {
      margin-right: 8px
    }
`;