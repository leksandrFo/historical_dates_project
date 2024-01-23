import styled from 'styled-components';

export const IntervalContainer = styled.div`
    position: relative;
    margin: 0 auto;
    top: -132px;
    height: 160px;
    width: 973px;
    display: flex;
    justify-content: space-between;
    z-index: -1;
  `;

export const Year = styled.div`
  font-family: PTSans-Bold, sans-serif;
  font-size: 200px;
  line-height: 160px;
  color: ${({ color }) => color};
`;