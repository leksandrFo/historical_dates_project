import { useState, useContext, useEffect } from 'react';
import Context from '../context/Context.tsx';
import styled from 'styled-components';
import CountUp from 'react-countup';

export default function Interval() {
  const {currentData, interval} = useContext(Context);
  
  const IntervalContainer = styled.div`
    margin: 0 auto;
    padding-top: 400px;
    padding-bottom: 137px;
    height: 160px;
    width: 973px;
    top: 400px;
    left: 217px;
    display: flex;
    justify-content: space-between;
  `;

  const Year = styled.div`
  font-family: PTSans-Bold, sans-serif;
  font-size: 200px;
  line-height: 160px;
  color: ${({ color }) => color};
`;

  const [year, setYear] = useState<number[]>(interval);

  useEffect(() => {
    setYear([interval[0], interval[1]])
  }, [currentData])

  return (
    <>
      <IntervalContainer>
        <Year color="#5D5FEF">
          <CountUp
            start={year[0]}
            end={interval ? interval[0] : year[0]}
            duration={1}
            separator=""
          />
        </Year>
        <Year color="#EF5DA8">
          <CountUp
            start={year[1]}
            end={interval ? interval[1] : year[1]}
            duration={1}
            separator=""
          />
        </Year>
      </IntervalContainer>
    </>
  );
}
