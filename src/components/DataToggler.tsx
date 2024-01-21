import React, { useContext } from "react";
import Context from "../context/Context.tsx";
import styled from "styled-components";

const DataToggler = () => {
  const {
    allData,
    currentData,
    activeCategoryId,
    setActiveCategoryId,
  } = useContext(Context);

  const Container = styled.div`
    padding-left: 80px;
    margin-bottom: 56px;
    height: 88px;
    width: 120px;
  `;

  const Info = styled.div`
    font-family: PTSans-Regular, serif;
    font-size: 14px;
  `;

  const Controllers = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  `;

  const Button = styled.button`
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(66, 86, 122, 0.5);
    font-size: 30px;
    color: #42567a;
    cursor: pointer;
    transition: background-color 0.3s linear;

    &:hover {
      transition: background-color 0.3s linear;
      background-color: #fff;
    }
  `;

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
