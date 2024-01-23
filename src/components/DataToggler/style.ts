import styled from "styled-components";

export const Container = styled.div`
  padding-left: 80px;
  margin-bottom: 56px;
  height: 88px;
  width: 120px;
`;

export const Info = styled.div`
  font-family: PTSans-Regular, serif;
  font-size: 14px;
`;

export const Controllers = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
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
`;
