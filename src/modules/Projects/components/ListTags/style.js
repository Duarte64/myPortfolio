import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    gap: 12px;
    list-style: none;
    margin-top: 8px;
`;

export const ListItem = styled.li`
    color: ${({theme}) => theme.colors.red.main};
    font-size: 14px;
    font-weight: 300;
`;