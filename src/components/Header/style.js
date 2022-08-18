import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    z-index: 12;

    @media screen and (max-width: 680px) {
        display: none;
    }
`;

export const Navigation = styled.nav`
    list-style: none;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;

    li {
        font-size: 16px;
        font-weight: 400;
        margin: 0px 20px;
        color: ${({theme}) => theme.colors.gray.secondary};
        
        &:last-child {
                color: ${({theme}) => theme.colors.red.main};
                font-weight: bolder;
                margin-right: 0px;
                margin-left: 6px;

                a {
                    display: flex;
                    flex-flow: row;
                    align-items: center;
                    gap: 4px;
                }
                
        }

        a {
            color: inherit; 
            text-decoration: none;
            transition: text-decoration-color 300ms;
            transition: all 0.3s ease-in;
            
            span {
                color: ${({theme}) => theme.colors.red.main};
            }
            
            &:hover {
                color: #b81447;
            }
        }
    }
`;