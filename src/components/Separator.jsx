import styled from 'styled-components';

export const Separator = styled.hr`
    height: 2px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.red.main};
    margin-bottom: 1em;
`;