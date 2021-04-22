import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BaseLayout from "./basesliderItem";

import "./mbase.scss";
//mobile basic screen
interface BaseProps {
  Layouts: {
    id: number;
    title: string;
    exparent: string;
    src: string;
  }[];
  SkipIntro: () => void;
}
const Mbasic = ({ Layouts, SkipIntro }: BaseProps) => {
  return (
    <div id="basemodel">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        preventClicks={false}
        pagination={{ clickable: true }}
      >
        {Layouts.map((data) => (
          <SwiperSlide
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <BaseLayout
              key={data.id}
              title={data.title}
              src={data.src}
              exparent={data.exparent}
            />

            <button className="skipbutton" onClick={SkipIntro}>
              intro skip
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mbasic;
