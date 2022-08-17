import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        background: ${({theme}) => theme.colors.background};
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }

    &::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.red.main};
        border-radius: 4px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;