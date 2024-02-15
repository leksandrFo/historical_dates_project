import styled from 'styled-components';
import {media} from '../styles/media.styles.ts';

const VerticalLine = styled.div`
  position: absolute;
  left: ${({percentage}) => percentage};
  width: 1px;
  height: 100%;
  background: rgba(66, 86, 122, 0.1);
  z-index: -1;

  @media screen and (max-width: ${media.small}px) {
    display: none;
}
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 480px;
  height: 1px;
  width: 100%;
  background: rgba(66, 86, 122, 0.1);
  z-index: -1;

  @media screen and (max-width: ${media.small}px) {
    position: relative;
    top: 293px;
    background: #C7CDD9;
    opacity: 1;
}
`;

export default function Marking() {
  return (
    <>
      <VerticalLine />
      <VerticalLine percentage='50%' />
      <VerticalLine percentage='100%' />
      <HorizontalLine percentage='50%' />
    </>
  )
}