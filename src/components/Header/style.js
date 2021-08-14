import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
    
`
export const Content = styled.header`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 80vw;
    padding: 2rem 0rem 8rem;
    margin: 0 auto;
    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem; 
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        }
    }
`