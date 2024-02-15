import styled from "styled-components";
import {media} from '../../styles/media.styles.ts';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 238px;
  right: -206px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #42567a;

  @media screen and (max-width: ${media.small}px) {
    top: 260px;
    right: 0px;
    text-align: start;
    font-size: 14px;
  }
`;