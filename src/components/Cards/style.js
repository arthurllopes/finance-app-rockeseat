import styled from "styled-components";

export const Card = styled.div`
    background-color: var(--shape);
    border-radius: 4px;
    width: 24vw;
    min-width: 11rem;
    padding: 18px;
    color: var(--text-title);

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;  
    }
    strong{
        display: block;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 3rem;  
    }
    &.diffBackground{
        background-color: ${({total}) => total >= 0 ? 'var(--green)' : 'var(--red)'};
        color: white;
    }
`