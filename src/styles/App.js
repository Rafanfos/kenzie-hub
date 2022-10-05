import styled from "styled-components";

export const AppRoot = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

  form {
    background-color: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    /* height: 60%; */
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    max-width: 370px;
  }

  .name,
  .email,
  .password,
  .confirmPassword,
  .bio {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
  }

  h1,
  label,
  button,
  a,
  span {
    color: var(--grey-0);
  }

  input,
  button,
  a {
    height: 38px;
  }

  button,
  a {
    width: 90%;
    border-radius: 4px;
  }

  input {
    background-color: var(--grey-2);
    border-radius: 4px;
    border: none;
  }

  input:active {
    border: 1px solid var(--grey-0);
  }

  input:enabled {
    background-color: var(--grey-2);
  }

  span {
    color: var(--grey-1);
  }

  button {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    font-size: 16px;
  }

  a {
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    text-align: center;
    padding: 10px;
    font-size: 12px;
  }

  p {
    color: darkred;
  }
`;

export const Page = styled.div`
  background-color: var(--grey-4);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
