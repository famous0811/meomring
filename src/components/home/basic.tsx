import React from "react";
import Layout from "../layout/index";
import BaseLayout from "./basesliderItem";
import "./base.scss";
import exams from "../../res/images/undraw_exams.svg";
import Slider from "react-slick";
// import elastic-slider
//로그인 하기전에 화면
interface BaseProps {
  Layouts: {
    id: number;
    title: string;
    exparent: string;
    src: string;
  }[];
}

const basic = ({ Layouts }: BaseProps) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Layout>
      <div id="basehome">
        <div className="base_intro">
          <div id="base_icon">
            <object
              data={exams}
              type="image/svg+xml"
              style={{ overflow: "visible" }}
              aria-label="main img"
            />
            <div className="base_icon_title">
              <h1>TextMemorie</h1>
              <p className="subtitle">당신만에 암기 팁을 만들어 공유하세요!</p>
            </div>
          </div>

          <div className="base_intro_mouse">
            <span className="material-icons">arrow_downward</span>
          </div>
        </div>
        <div className="base_intro_first base_layouts">
          혹시 당신이 지금 이런 모습인가요? 단어 암기가 힘든당신 단어 발음을
          까먹는 당신 ~~
          <Slider {...settings}>
            {Layouts.map((data) => (
              <BaseLayout
                key={data.id}
                title={data.title}
                src={data.src}
                exparent={data.exparent}
              />
            ))}
          </Slider>
          <div className="first_userTest">
            <button>넵</button>
            <button>아니여</button>
          </div>
        </div>

        <div className="base_intro_secend base_layouts">
          yes: 그럼 잘찾아 오셨습니다! 이런 여러분들을 위해 저희가 이런 사이트를
          만들었습니다. no: 그럼 여러분에 팁을 알려주세요!
        </div>

        <div className="base_intro_third base_layouts">
          많은 분들이 공유한 암기팁을 이용해서 자신만에 단어장을 만들고 학습
          해보세요!
        </div>

        <div>자 영어 전문가가 되실 준비 되셨나요?</div>
      </div>
    </Layout>
  );
};

export default basic;
