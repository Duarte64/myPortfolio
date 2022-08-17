import styled from 'styled-components';

export const Container = styled.div`
    transition: 
        transform .25s cubic-bezier(0.215, 0.610, 0.355, 1.000);

    &:hover {
        transform: scale3d(1.08, 1.08, 1);
        z-index: 1;
        cursor: pointer;
    }

    & + & {
        margin-top: 16px;
    }
`;

export const CompleteDescription = styled.div`
    background-color: #141414;
    border-radius: 2px;
    padding: 16px;
    
    h3 {
        color: ${({theme}) => theme.colors.red.main};
    }

    p {
        font-size: 16px;
        font-weight: 300;
        margin: 0px;
    }
`;

export const ImagePreview = styled.div`

`;