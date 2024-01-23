import { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context.tsx';
import CountUp from 'react-countup';
import {IntervalContainer, Year} from './style.ts';

export default function Interval() {
  const {currentData, interval} = useContext(Context);

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
