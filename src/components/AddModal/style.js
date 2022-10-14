import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .modal {
    margin: 0 auto;
    width: 80%;
    max-width: 370px;
    height: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  .header {
    background-color: var(--grey-2);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 100%;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  input,
  select {
    padding: 10px;
    width: 100%;
    color: #ffffff;
  }

  .modal-text {
    color: #ffffff;
    font-size: 16px;
  }

  .close:hover {
    scale: 1.2;
    cursor: pointer;
  }

  .button {
    width: 100%;
  }
`;
