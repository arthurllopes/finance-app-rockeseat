import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    margin: 0 auto;

    table{
        width: 90%;
        margin: 0 auto;
        border-spacing: 0 .875rem;
    }
    th {
        color: var(--text-body);
        font-weight: 400;
        text-align: left;
        line-height: 2rem;
        padding: 0 20px;
    }
    td{
        padding: 18px;
        background-color: var(--shape);
        border: 0;
        border-radius: 4px;
        color: var(--text-body);

        &:first-child{
            color: var(--text-title)
        }
    
        &.income{
            color: var(--green);
        }
        &.outcome{
            color: var(--red);
        }
    }
`