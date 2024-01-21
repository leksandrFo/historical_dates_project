import React, { useState, useMemo, useEffect } from 'react';
import Context from '../context/Context.tsx';
import { DATA } from '../data/data.ts'
import { IData } from '../data/interface/IData.ts'

const DEFAULT_ACTIVE_CATEGORY_ID = 1;

export default function ContextProvider({ children }): JSX.Element {
  const [allData, setAllData] = useState<IData[]>(DATA);
  const [activeCategoryId, setActiveCategoryId] = useState<number>(DEFAULT_ACTIVE_CATEGORY_ID);
  const [currentData, setCurrentData] = useState<IData>(DATA.filter(item => item.id === activeCategoryId)[0]);

  const length = currentData.events.length - 1;
  const startInterval = currentData.events[0].year;
  const endInterval = currentData.events[length].year

  const [interval, setInterval] = useState<number[]>([startInterval, endInterval])
  
  useEffect(() => {
    setCurrentData(allData.filter((item) => item.id === activeCategoryId)[0]);
  }, [activeCategoryId]);

  useEffect(() => {
    setInterval([startInterval, endInterval]);
  }, [currentData]);

  const contexMemo = useMemo(
    () => ({
      allData,
      activeCategoryId,
      currentData,
      interval,
      setAllData,
      setActiveCategoryId,
      setCurrentData,
      setInterval,
    }),
    [
      allData,
      activeCategoryId,
      currentData,
      interval,
      setAllData,
      setActiveCategoryId,
      setCurrentData,
      setInterval,
    ]
  );

  return <Context.Provider value={contexMemo}>{children}</Context.Provider>;
}
