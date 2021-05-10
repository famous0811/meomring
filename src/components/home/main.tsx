import React from "react";
import "./main.scss";
import Layout from "../layout/index";

import Slider from "react-slick";
//로그인 한뒤에 나오는 화면

interface Tip {
  _id: string;
  text: string;
  img: string;
  user: string;
}
interface Voca {
  title: string;
  subtitle: string;
  amount: number;
  user: string;
}

interface MainProps {
  myvoca: Voca[] | undefined;
  mytips: Tip[] | undefined;

  detailvoca: (id: string) => void;
  detailtip: (id: string) => void;
}

const Main = ({ myvoca, mytips, detailtip, detailvoca }: MainProps) => {
  return (
    <Layout>
      <div id="mainpage">
        <div>
          <div id="useractivty_grapes"></div>
          <div>
            <h1>{"allblack"}님의 주간활동</h1>
          </div>
          <ul className="userActivity">
            <li className="activity">
              <p>추가한단어수:</p>
              <div>3</div>
            </li>
            <li className="activity">
              <p>저장한 단어수:</p>
              <div>3</div>
            </li>
          </ul>
        </div>

        <div className="userInfo">
          <div>
            {/* 내가무작위로 모은 20개정도 단어 */}
            <h1>주간도전</h1>
          </div>
          <ul className="userActivity">
            <li className="activity">test </li>
            <li className="activity">test</li>
            <li className="activity">test</li>
          </ul>
        </div>

        <div className="weekstip">
          <h1>주간암기팁</h1>
          {/* <Slider
            effec t="flip"
            //   spaceBetween={50}
            //   navigation
            loop={true}
            lazy={
              { loadPrevNext: true } // 이전, 다음 이미지는 미리 로딩
            }
          >
            
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <Tip text="hello word" user="allbalck" icon="" />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <Tip text="hello word2" user="allbalck" icon="" />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <Tip text="hello word3" user="allbalck" icon="" />
            </SwiperSlide>
          </Slider> */}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
