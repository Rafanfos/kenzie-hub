import styled from "styled-components";
import { downAppear } from "../../styles/components/keyframes";

export const DashboardPage = styled.div`
  background-color: var(--grey-4);
  width: 100%;
  min-height: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${downAppear} 1s;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .presentation {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
    padding: 20px;
    gap: 20px;
  }

  h3 {
    color: #ffffff;
    font-size: 18px;
  }

  .message {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .message > h3,
  .message > span {
    color: transparent;
  }

  .techs {
    width: 90%;
  }

  .techs-title {
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: space-between;
  }

  #add {
    width: 30px;
    height: 30px;
  }

  .techs-title > h2 {
    color: #ffffff;
  }

  ul {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--grey-3);
    max-height: 400px;
    overflow-x: auto;
  }

  li {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-4);
    padding: 10px;
    border-radius: 4px;
  }

  li:hover {
    background-color: var(--grey-3);
    cursor: pointer;
    border: 1px solid var(--grey-4);
  }

  .tech-name {
    font-size: 14px;
    color: #ffffff;
  }

  .tech-list {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .message > h3 {
      color: #ffffff;
      font-size: 18px;
    }

    .message > span {
      color: var(--grey-1);
    }
  }
`;
