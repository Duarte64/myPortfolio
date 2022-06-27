import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 900px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding: 12px;

    span {
        text-align: center;
        font-size: 64px; 
        font-weight: 600;
    }

    p {
        font-size: 20px; 
        color: ${({theme}) => theme.colors.gray.main};
        margin-top: 1em;
        text-align: center;
    }
`;