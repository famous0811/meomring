import React from "react";
import "./main.scss";
import Layout from "../layout/index";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Line } from "react-chartjs-2";

import Voca from "../Ui/voca";
import Word from "../Ui/word";
//로그인 한뒤에 나오는 화면

interface Tip {
  _id: string;
  word: string;
  tip: string;
  meaning: string;
  src?: string;
}
interface Vocabulary {
  _id: string;
  title: string;
  subtitle: string;
  amount: number;
  user: string;
}
interface User {
  id: string | null;
  points: number | null;
  maketips: number | null;
}

interface MainProps {
  myvoca: Vocabulary[] | undefined;
  mytips: Tip[] | undefined;

  user: User | undefined;

  detailvoca: (id: string) => void;
  detailtip: (id: string) => void;
  // addtipgrapData: any;
}

const Main = ({ myvoca, mytips, user, detailtip, detailvoca }: MainProps) => {
  return (
    <Layout>
      <div id="mainpage">
        <div>
          {/* <div id="useractivty_grapes"></div> */}
          <div className="title">
            <h1>{user?.id}주간활동</h1>
          </div>
          <Slider>{/* 분석 그래프3개 정도? */}</Slider>
          <ul className="userActivity">
            <li className="activity">
              <div>추가한 tips: 3</div>
            </li>
            <li className="activity">학습 시간: 3시간</li>
          </ul>
        </div>

        <div className="userInfo">
          <div className="title">
            {/* 내가무작위로 모은 20개정도 단어 */}
            <h1>주간도전</h1>
          </div>
          <ul className="userActivity weeksChallenge">
            <li className="activity">test </li>
            <li className="activity">test</li>
            <li className="activity">test</li>
          </ul>
        </div>
        <div id="vocas">
          <div className="import">
            <h3>단어장</h3>
            <span className="others">
              <Link to="/voca">더보기</Link>
            </span>
          </div>
          <div className="lists">
            {myvoca ? (
              myvoca.map((data) => (
                <Voca
                  key={data._id}
                  title={data.title}
                  subtitle={data.subtitle}
                  count={data.amount}
                  user={data.user}
                  data-aos="fade-in"
                />
              ))
            ) : (
              <div className="empty">"자신만에 단어장을 만들어 보세요!"</div>
            )}
          </div>
        </div>

        <div id="myvoca">
          <div className="import">
            <h3>내가 만든팁</h3>
            <span className="others">
              <Link to="/find">추가하기</Link>
            </span>
          </div>
          <div className="lists">
            {mytips ? (
              mytips.map((data) => (
                <Word
                  key={data._id}
                  word={data.word}
                  meaning={data.meaning}
                  tip={data.tip}
                  src={data.src}
                  data-aos="fade-in"
                />
              ))
            ) : (
              <div className="empty">"자신만에 팁을 만들어 보세요!"</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
