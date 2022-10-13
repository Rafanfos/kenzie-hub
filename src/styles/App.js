import styled from "styled-components";
import { loading, rotate, topAppear } from "./components/keyframes";

export const AppRoot = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  .title-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 10px;
  }

  form {
    background-color: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    max-width: 370px;
  }

  .name,
  .email,
  .password,
  .confirmPassword,
  .bio,
  .contact,
  .course_module {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
  }

  h1,
  label,
  .button,
  a,
  span {
    color: var(--grey-0);
  }

  input,
  select,
  .button,
  a {
    height: 38px;
  }

  .button,
  a {
    width: 90%;
    border-radius: 4px;
  }

  input,
  select {
    background-color: var(--grey-2);
    border-radius: 4px;
    border: none;
  }

  span {
    color: var(--grey-1);
  }

  .button {
    background-color: var(--primary-negative);
    border: 1px solid var(--primary-negative);
    font-size: 16px;
  }

  .button:hover {
    background-color: var(--primary-focus);
    border: 1px solid var(--primary-focus);
  }

  .button:focus {
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }

  a {
    text-align: center;
    padding: 10px;
    font-size: 12px;
  }

  .grey-button {
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
  }

  .black-button {
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    width: 80px;
  }

  .black-button:hover,
  .grey-button:hover {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  p {
    color: darkred;
  }

  #loader {
    color: var(--grey-1);
    animation: ${rotate} 2s linear infinite;
  }

  .loading {
    animation: ${loading} 2s linear infinite;
  }

  @media (min-width: 768px) {
    .title-div {
      width: 40%;
    }
  }
`;

export const Page = styled.div`
  background-color: var(--grey-4);
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  overflow: auto;
  animation: ${topAppear} 3s;
`;
