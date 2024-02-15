import styled from "styled-components"
import { media } from "./media.styles.ts"

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  min-width: 320px;
  height: 100vh;

  @media screen and (max-width: ${media.small}px) {
    width: 320px;
    height: 568px;
  }
`;
