import styled from "styled-components";

export default styled.div`
    img {
        margin: 16px 8px;
        transition: all 0.5s ease;
        cursor: pointer;

        &:hover {
        filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(-60deg) brightness(75%) contrast(100%);
        }
    }
`;