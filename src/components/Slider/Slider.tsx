import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Context from "../../context/Context.tsx";
import useWindowWidth from '../../hooks/useWindowsWidth.ts'
import { gsap } from "gsap";
import { media } from "../../styles/media.styles.ts";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const SwiperContainer = styled.div`
  padding: 0 80px;
  overflow: hidden;
  margin: 0 1px;
  z-index: 1;

  @media screen and (max-width: ${media.small}px) {
    width: 320px;
    height: 211px;
    padding: 0;
  }
`;

const EventYear = styled.div`
  font-family: BebasNeue-Regular, serif;
  font-size: 25px;
  line-height: 120%;
  color: #3877ee;

  @media screen and (max-width: ${media.small}px) {
    font-size: 16px;
  }
`;

const EventDescription = styled.p`
  font-family: PTSans-Regular, serif;
  font-size: 20px;
  line-height: 30px;
  color: #42567a;
  margin-top: 15px;

  @media screen and (max-width: ${media.small}px) {
    font-size: 14px;
    line-height: 145%
  }
`;

export default function Slider(mobile: boolean) {

  const { currentData } = useContext(Context);
  const sliderRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const width = useWindowWidth();

  useEffect(() => {
    if (width <= media.small) {
      setSlidesPerView(1.5);
    } else {
      setSlidesPerView(3);
    }
  }, [width]);

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      {
        opacity: 0,
      },
      { duration: 1.5, opacity: 1 }
    );
  }, [currentData]);

  return (
    <>
      <SwiperContainer ref={sliderRef}>
        <Swiper
          navigation={true}
          slidesPerView={slidesPerView}
          spaceBetween={!mobile ? 80 : 25}
          modules={[Navigation]}
          className="mySwiper"
        >
          {currentData &&
            currentData.events.map(
              (
                { year, event }: { year: number; event: string },
                index: number
              ) => (
                <SwiperSlide key={index}>
                  <EventYear>{year}</EventYear>
                  <EventDescription>{event}</EventDescription>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </SwiperContainer>
    </>
  );
}
