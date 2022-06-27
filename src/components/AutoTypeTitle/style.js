import styled from "styled-components";

export const TitleArea = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .typed-cursor {
        color: ${({theme}) => theme.colors.red.main};
        font-size: ${({ cursorSize }) => cursorSize}; 
    }
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.red.main};
    font-size: ${({ fontSize }) => fontSize};
`;