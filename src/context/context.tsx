import { createContext } from 'react';
import { IData } from '../data/interface/IData.ts'

interface IContext {
  data: IData | null
  activeCategoryId: number | null
  interval: number[] | null
  slide: number | null
}

const Context = createContext<IContext>({
  data: null,
  activeCategoryId: null,
  interval: null,
  slide: null,
});

export default Context;