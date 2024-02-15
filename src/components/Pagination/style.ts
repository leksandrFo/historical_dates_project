import styled from "styled-components";

export const PaginationContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 86px;
  margin: 0 auto;
  margin-bottom: 32px;

  div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #42567a;
    opacity: 0.4;
    user-select: none;
    &.active {
      opacity: 1;
    }
  }
`;