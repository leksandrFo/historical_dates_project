import styled from "styled-components";
import {media} from '../../styles/media.styles.ts';

export const Container = styled.div`
  padding-left: 80px;
  margin-bottom: 56px;
  height: 88px;
  width: 120px;

  @media screen and (max-width: ${media.small}px) {
    position: absolute;
    height: 50px;
    width: 60px;
    bottom: 0;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 23px;
  }
`;

export const Info = styled.div`
  font-family: PTSans-Regular, serif;
  font-size: 14px;
`;

export const Controllers = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${media.small}px) {
    margin-top: 11px;
    width: 59px;
}
`;

export const Button = styled.button`
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  font-size: 30px;
  color: #42567a;
  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    transition: background-color 0.3s linear;
    background-color: #fff;
  }

  @media screen and (max-width: ${media.small}px) {
    font-size: 16px;
    width: 25px;
    height: 25px;
}
`;
