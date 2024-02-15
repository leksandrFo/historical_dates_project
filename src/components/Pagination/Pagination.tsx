import React, { useContext } from "react";
import Context from "../../context/Context";
import { IData } from "../../data/interface/IData";
import {PaginationContainer} from "./style.ts";

const PaginationMobile = () => {
  const {activeCategoryId, setActiveCategoryId, allData} = useContext(Context);

  return (
    <PaginationContainer>
      {allData.map((item: IData) => (
        <div
          key={item.id}
          onClick={() => setActiveCategoryId(item.id)}
          className={activeCategoryId === item.id && 'active'}
        />
      ))}
    </PaginationContainer>
  );
};

export default PaginationMobile;