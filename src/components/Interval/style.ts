import styled from 'styled-components';
import {media} from '../../styles/media.styles.ts';

export const IntervalContainer = styled.div`
  position: relative;
  margin: 0 auto;
  top: -132px;
  width: 973px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  z-index: -1;

  @media screen and (max-width: ${media.medium}px) {
    top: -85px;
    width: 70%;
  }

  @media screen and (max-width: ${media.small}px) {
    top: -31px;
    width: 273px;
    margin: 0 auto;
    margin-bottom: 57px
  }
`;

export const Year = styled.div`
  font-family: PTSans-Bold, sans-serif;
  font-size: 200px;
  line-height: 160px;
  color: ${({ color }) => color};

  @media screen and (max-width:${media.medium}px) {
    font-size: 15vw;
    line-height: 72px;
  }

  @media screen and (max-width: ${media.small}px) {
    font-size: 56px;
    line-height: 72px;
  }
`;