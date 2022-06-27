import styled from 'styled-components';

export const ListContainer = styled.ul`
    
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    min-width: 350px;
    justify-content: space-between;
    color: ${({theme}) => theme.colors.red.main};
    font-size: 18px; 
    list-style: none;

    li {
        width: 40%;
        min-width: 170px;
        display: flex;
        align-items: center;

        span {
            font-size: 14px;
            margin-right: 8px;
        }
    }

`;
