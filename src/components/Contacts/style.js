import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 16px 0px;

    p {
        width: 100%;
    }

    img {
        margin: 16px 8px;
        transition: all 0.35s ease;
        cursor: pointer;

        &:hover {
            filter: invert(50%) sepia(15%) saturate(2000%) hue-rotate(-60deg);
        }
    }
`;