import React, { useContext } from "react";
import Context from "../../context/Context.tsx";
import { Container } from './style.ts';

const CategoryName = () => {
  const { currentData } = useContext(Context);
  
  return <Container>{currentData.category}</Container>;
};

export default CategoryName;