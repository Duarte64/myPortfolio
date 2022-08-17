import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    min-width: 370px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 150px 12px 200px;
`;

export const FormArea = styled.form`
    width: 50%;
    min-width: 370px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`;

export const InfoArea = styled.div`
    width: 50%;
    min-width: 370px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 16px 0px;
    color: white;

    input {
        width: 100%;
        height: 50px;
        -webkit-clip-path: polygon(0 0, 100% 100%, 100% 75%, 100% 75%, 0 100%, 0 0);
        clip-path: polygon(0 0, 100% 0, 100% 65%, 95% 100%, 0 100%, 0 0);
        background: white;
    }

    textarea {
        resize: none;
    }
    
    label {
        width: 50%;
    }

    .insertData {
        background-color: transparent;
        border: 1px solid white;
        padding: 4px 8px;
    }
`;