import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 720px;
    margin: 0px auto;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    min-height: 70vh;

    @media screen and (max-width: 768px) {
        padding: 8px;
    }

    div {
        width: 100%;
    }

    p {
        font-size: 18px; 
        color: ${({theme}) => theme.colors.gray.main};
        margin-bottom: 1em;
        text-align: left;
        
        span {
            font-size: 20px; 
            font-weight: 600;
            color: ${({theme}) => theme.colors.red.main};
        }
    }

    .typed-cursor {
        color: ${({theme}) => theme.colors.red.main};
        font-size: 32px; 
    }
`;
