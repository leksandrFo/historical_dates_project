import styled from "styled-components";

const RADIUS = 530;
const DOT_SIZE = 56;
const HIDDEN_DOT_SIZE = 6;

export const CircleContainer = styled.div`
  position: relative;
  top: 215px;
  margin: 0 auto;
  width: ${RADIUS}px;
  height: ${RADIUS}px;
  margin: 0 auto;
`;
export const CircleLine = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(66, 86, 122, 0.1);
  border-radius: 50%;
`;

export const Dot = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width: ${HIDDEN_DOT_SIZE}px;
height: ${HIDDEN_DOT_SIZE}px;
left: ${RADIUS / 2 - HIDDEN_DOT_SIZE / 2}px;
top: -${HIDDEN_DOT_SIZE / 2}px;
box-sizing: border-box;
border-radius: 50%;
border: 1px solid rgba(48, 62, 88, 0.5);
background: #42567A;
transform: rotate(${({ rotate }) => rotate});
transform-origin: ${HIDDEN_DOT_SIZE / 2}px ${
  RADIUS / 2 + HIDDEN_DOT_SIZE / 2
}px;
font-size: 20px;
z-index: 1;
overflow: hidden;

&.active,
&:hover {
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  left: ${RADIUS / 2 - DOT_SIZE / 2}px;
  top: -${DOT_SIZE / 2}px;
  box-sizing: border-box;
  border: 1px solid rgba(48, 62, 88, 0.5);
  border-radius: 50%;
  background: #F4F5F9;
  transform-origin: ${DOT_SIZE / 2}px ${RADIUS / 2 + DOT_SIZE / 2}px;
  transition: 0.3s;
  }
}`;

export const DotInner = styled.div`
  transform: rotate(${({ rotate }) => rotate});
`;
