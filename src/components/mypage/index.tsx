import React from "react";
import Layout from "../layout/index";
import "./mypage.scss";
import test from "../../res/images/exams.svg";
interface MypageProps {
  user:
    | {
        id: string | null;
        points: number | null;
        maketips: number | null;
      }
    | undefined;
}
const index = ({ user }: MypageProps) => {
  return (
    <Layout>
      <div id="userdata">
        <div>
          <div id="usericon">
            <object data={test} type="" aria-label="user_icon" />
          </div>
          <input type="text" placeholder="아이디" className="fixFrame" />
          <input type="text" placeholder="이름" className="fixFrame" />
          <input
            type="number"
            placeholder="나이"
            className="fixFrame"
            max={50}
            min={10}
          />
          <input
            type="password"
            className="fixFrame"
            placeholder="비밀번호 입력"
          />
          <input
            type="password"
            className="fixFrame"
            placeholder="비밀번호 재입력"
          />
          <button id="changebutton" className="on" disabled>
            변경하기
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default index;
