import React, {useContext, useEffect} from "react";
import { IData } from "../../data/interface/IData";
import Context from "../../context/Context";
import {CircleContainer, CircleLine, Dot, DotInner} from './style.ts';

const Circle = () => {
  const {activeCategoryId, setActiveCategoryId, allData} = useContext(Context);

  const degreeCounter = (index: number): number => {
    return (index * 360) / allData.length + 360 / allData.length / 2;
  }

  const handleClick = (id: number) => {
    setActiveCategoryId(() => id);
  }

  return (
    <>
      <CircleContainer>
        <CircleLine>
          {allData.map((item: IData, index: number) => (
            <Dot
              key={item.id}
              onClick={() => handleClick(item.id)}
              rotate={`${degreeCounter(index)}deg`}
              className={activeCategoryId === item.id && 'active'}
            >
              <DotInner rotate={`-${degreeCounter(index)}deg`}>
                {item.id}
              </DotInner>
            </Dot>
          ))}
        </CircleLine>
      </CircleContainer>
    </>
  );
}

export default Circle;