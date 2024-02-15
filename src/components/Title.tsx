import React from 'react';
import styled from 'styled-components';
import {media} from '../styles/media.styles.ts';

const TitleText = styled.div`
  position: absolute;
  margin-top: 170px;
  margin-left: 80px;
  height: 134px;
  width: 353px;
  font-family: PTSans-Bold, sans-serif;
  font-size: 56px;
  line-height: 120%;
  color: #42567A;

  @media screen and (max-width: ${media.small}px) {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 59px;
    margin-left: 0;
    font-size: 20px;
    width: 123px;
  }
`;

const TitleDecorations = styled.div`
  position: absolute;
  margin-top: 177px;
  width: 5px;
  height: 120px;
  background: linear-gradient(180deg, #3877EE 0%, #EF5DA8 100%);

  @media screen and (max-width: ${media.small}px) {
    display: none;
  }
`

export default function Title() {
  return (
    <>
      <TitleDecorations />
      <TitleText>Исторические даты</TitleText>
    </>
  );
}