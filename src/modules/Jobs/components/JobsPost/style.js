import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    height: 224px;
    & + & {
        margin-top: 48px;
    }

    svg {
     color: ${({theme}) => theme.colors.red.main};
    }

    hr {
        position: absolute;
        bottom: 2px;
    }
`;

export  const TextArea = styled.div`
    background-color: #141414;
    border-radius: 2px;
    padding: 8px;
    width: 52%;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    transition: 
        transform .25s cubic-bezier(0.215, 0.610, 0.355, 1.000);

    ${({id}) => (id % 2 !== 0) ? 
        css `
            bottom: 5%;
            left: 0;
        ` 
        : 
        css `
            bottom: 5%;
            right: 0;
        `
    }

    h3 {
        color: ${({theme}) => theme.colors.red.main};
    }

    p {
        color: ${({theme}) => theme.colors.gray.main};
    }

    svg {
        position: absolute;
        top: 0;
        right: -64px;
        z-index: -1;
        color: ${({theme}) => theme.colors.gray.alternative};
    }

    

    &:hover {
        transform: scale3d(1.05, 1.05, 1);
        z-index: 1;
        cursor: default;
    }
`;

export const ImageContainer = styled.div`
    width: 300px;
    height: 224px;
    position: absolute;
    overflow: hidden;
    border-radius: 4px;
    background-image: linear-gradient(90deg, rgba(184,20,71,0.2) 0%, rgba(207,23,80,1) 100%), url(${({src}) => src});
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    
    ${({id}) => (id % 2 !== 0) ? 
        css `
            right: 0;
        ` 
        : 
        css `
            left: 0;
        `
    }
    background-size: cover;
`;