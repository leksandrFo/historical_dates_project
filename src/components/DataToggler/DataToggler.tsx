import React, { useContext } from "react";
import Context from "../../context/Context.tsx";
import {Container, Info, Controllers, Button} from './style.ts';

const DataToggler = () => {
  const {
    allData,
    currentData,
    activeCategoryId,
    setActiveCategoryId,
  } = useContext(Context);

  const handleClickPrev = () => {
    if (activeCategoryId <= allData.length && activeCategoryId > 1) {
      setActiveCategoryId((prevState) => prevState - 1);
    } else if (activeCategoryId === 1) {
      setActiveCategoryId(allData.length);
    }
  };
  const handleClickNext = () => {
    if (activeCategoryId < allData.length) {
      setActiveCategoryId((prevState) => prevState + 1);
    } else if (activeCategoryId === allData.length) {
      setActiveCategoryId(1);
    }
  };

  return (
    <Container>
      <Info>
        {(currentData.id.toString().length > 1
          ? currentData.id
          : `0${currentData.id}/`
        ).concat(allData.length > 10 ? allData.length : `0${allData.length}`)}
      </Info>
      <Controllers>
        <Button onClick={handleClickPrev}>&#8249;</Button>
        <Button onClick={handleClickNext}>&#8250;</Button>
      </Controllers>
    </Container>
  );
};

export default DataToggler;
