import React from 'react';
import styled from 'styled-components';

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
`;

const TitleDecorations = styled.div`
  position: absolute;
  margin-top: 177px;
  width: 5px;
  height: 120px;
  background: linear-gradient(180deg, #3877EE 0%, #EF5DA8 100%);
`

export default function Title() {
  return (
    <>
      <TitleDecorations />
      <TitleText>Исторические даты</TitleText>
    </>
  );
}