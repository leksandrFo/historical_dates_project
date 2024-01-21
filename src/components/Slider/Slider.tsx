import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Context from "../../context/Context.tsx";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const SwiperContainer = styled.div`
  padding: 0 80px;
  overflow: hidden;
`;

const EventYear = styled.div`
  font-family: BebasNeue-Regular, serif;
  font-size: 25px;
  line-height: 120%;
  color: #3877ee;
`;

const EventDescription = styled.p`
  font-family: PTSans-Regular, serif;
  font-size: 20px;
  line-height: 30px;
  color: #42567a;
  margin-top: 15px;
`;

export default function Slider() {
  const { currentData } = useContext(Context);
  const sliderRef = useRef(null);
  
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
          slidesPerView={3}
          spaceBetween={80}
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
