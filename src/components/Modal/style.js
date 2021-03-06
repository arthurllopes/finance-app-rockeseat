import styled from "styled-components";

export const ModalForm = styled.form`
    padding: 22px;
h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
}
button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
}
`
export const TransactionTypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;

    img {
    width: 20px;
    height: 20px;
  }
` 
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    p {
        margin-right: 4px;
    }
    &:hover {
    border-color: (0.8, '#d7d7d7');
    }
    &.income{
        background-color: #33cc95;
        color: white;
    }
    &.outcome{
        background-color: #e52e4d;
        color: white;
    }

`