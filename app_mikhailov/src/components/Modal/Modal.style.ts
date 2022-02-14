import styled from 'styled-components';

export const Component = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    background-color: rgba(1, 1, 1, .5);
`;

export const Block = styled.div`
    text-align: center;
    background-color: #ffffff;
    padding: 10px 30px;
`;

export const Title = styled.h3`
    padding: 20px 40px;
`;

export const Text = styled.p`
    padding: 10px;
`;

export const Bottom = styled.button`
    padding: 10px 30px;
    cursor: default;
    &:hover {
        cursor: pointer;
    }
`;