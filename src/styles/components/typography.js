import styled, { css } from "styled-components";
import { Texts } from "../../components/Texts";

export const StyledTitle = styled(Texts)`
  ${({ className }) => {
    switch (className) {
      case "title":
        return css`
          font-weight: 700;
          font-size: 16px;
        `;

      case "headline-bold":
        return css`
          font-weight: 700;
          font-size: 12px;
        `;

      case "headline-italic":
        return css`
          font-style: italic;
          font-size: 12px;
        `;

      default:
        return css`
          font-size: 12px;
        `;
    }
  }}
`;
