import React from "react";
import Layout from "../layout/index";
import BaseLayout from "./basesliderItem";
import "./base.scss";
import exams from "../../res/images/undraw_exams.svg";
import welcome from "../../res/images/undraw_welcome.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import elastic-slider
//로그인 하기전에 화면
interface BaseProps {
  Layouts: {
    id: number;
    title: string;
    exparent: string;
    src: string;
  }[];
  settings: any;
  Start: () => void;
  YesNo: (y: boolean) => void;
  IntroMotivation: string;
  userTestRef: React.RefObject<HTMLDivElement>;
}

const basic = ({
  Layouts,
  settings,
  Start,
  userTestRef,
  YesNo,
  IntroMotivation,
}: BaseProps) => {
  return (
    <Layout>
      <div>
        <div className="base_intro">
          <div id="base_icon">
            <object
              data={exams}
              type="image/svg+xml"
              style={{ overflow: "visible", width: "550px", height: "550px" }}
              aria-label="main img"
            />
            <div className="base_icon_title">
              <h1>TextMemorie</h1>
              <p className="subtitle">당신만에 암기 팁을 만들어 공유하세요!</p>
            </div>
          </div>

          <div onClick={Start} className="base_intro_mouse">
            <span className="material-icons">arrow_downward</span>
          </div>
        </div>

        <div id="base_intro" className="base_intro_first">
          <div className="base_layouts">
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

            <div className="first_userTest" ref={userTestRef}>
              <h1 className="base_layouts_title">
                혹시 당신이 지금 이런 모습인가요?
              </h1>
              <div>
                <button className="button-layout" onClick={() => YesNo(true)}>
                  넵
                </button>
                <button className="button-layout" onClick={() => YesNo(false)}>
                  아니여
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="base_intro_secend" className="base_layouts">
          <object data={welcome} type="" aria-label="weelcome" />
          <div>
            <p className="base_layouts_title">{IntroMotivation}</p>
          </div>
        </div>

        <div id="base_intro_third" className="base_layouts">
          많은 분들이 공유한 암기팁을 이용해서 자신만에 단어장을 만들고 학습
          해보세요!
        </div>

        <div className="base_intro base_intro_finish">
          <p>자 영어 전문가가 되실 준비 되셨나요?</p>
          <Link to="/login">시작하기</Link>
        </div>
      </div>
    </Layout>
  );
};

export default basic;
