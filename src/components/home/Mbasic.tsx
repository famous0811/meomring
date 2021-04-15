import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BaseLayout from "./baselayout";
import { Link } from "react-router-dom";
import "./mbase.scss";
//mobile basic screen
interface BaseProps {
  Layouts: {
    id: number;
    title: string;
    exparent: string;
    src: string;
  }[];
  skip: boolean;
  swiperef: React.RefObject<HTMLDivElement>;
  SkipIntro: () => void;
}
const Mbasic = ({ Layouts, SkipIntro, skip, swiperef }: BaseProps) => {
  return (
    <div id="basemodel" ref={swiperef}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        preventClicks={false}
        pagination={{ clickable: true }}
        className={skip ? "intrOut" : undefined}
      >
        {Layouts.map((data, index) =>
          index !== Layouts.length - 1 ? (
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
          ) : (
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
                시작하기
              </button>
            </SwiperSlide>
          )
        )}
      </Swiper>
      {/* "loginhub" */}
      <div id="intro" className={skip ? "loginhub" : undefined}>
        <div className="header">
          <h1>TextMemorie</h1>
          <h5>단어 암기팁 공유 플렛폼</h5>
        </div>

        <div className="beuser">
          <Link to="/signup">회원가입</Link>
        </div>

        <ul className="simple">
          <li className="kakao">카카오간편 로그인</li>
          <li className="facebook">패이스북 로그인</li>
          <li className="naver">네이버간편 로그인</li>
        </ul>
        <div className="afuser">
          <div>이미 회원이신가요?</div>
          <Link to="/login">로그인 하러가기</Link>
        </div>
      </div>
    </div>
  );
};

export default Mbasic;
