import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        text-align: center;
        font-size: 64px; 
        font-weight: 600;
    }

    p {
        font-size: 20px; 
        color: #8b8b8b;
        margin-top: 1em;
        text-align: center;
    }
`;