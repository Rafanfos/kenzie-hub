import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const loading = keyframes`
 from {
    color:transparent
  }
  

  to {
    color:var(--grey-1);
  }

`;

export const downAppear = keyframes`
  from {
    margin-top:200%;
  }

  to {
    margin-top:0;
  }
`;

export const topAppear = keyframes`
 from {
    margin-top:-200%;
  }

  to {
    margin-top:0;
  }
  `;
