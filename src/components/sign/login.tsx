import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import "./sign.scss";
import Modal from "../../res/images/undraw_team_work_k80m.svg";

interface LoginProps {
  slider: (i: string) => void;
  button: string;
  sgin: () => void;
  setid: (e: any) => void;
  setpassword: (e: any) => void;
}
const Login = ({ slider, button, sgin, setpassword, setid }: LoginProps) => {
  return (
    <div id="signpage">
      <div id="signWrap">
        <div className="imgs">
          <div className="container">
            <div className="indicator">
              <span
                className={[button === "one" ? "active" : "", "btn"].join(" ")}
                onClick={() => slider("one")}
              ></span>
              <span
                className={[button === "two" ? "active" : "", "btn"].join(" ")}
                onClick={(e) => {
                  slider("two");
                }}
              ></span>
              <span
                className={[button === "three" ? "active" : "", "btn"].join(
                  " "
                )}
                onClick={(e) => slider("three")}
              ></span>
            </div>

            <div className="testimonial">
              <div className={"slieder-row " + button}>
                <div className="slide-col">
                  <object data={Modal} type="" aria-label="modal" />
                </div>
                <div className="slide-col">
                  <object data={Modal} type="" aria-label="modal" />
                </div>
                <div className="slide-col">
                  <object data={Modal} type="" aria-label="modal" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <h1>로그인</h1>
          <div className="InputWrap">
            <div className="text">이메일 주소</div>
            <input
              type="email"
              placeholder="아이디"
              onChange={(e) => setid(e)}
            />
          </div>

          <div className="InputWrap">
            <div className="text">비밀번호</div>
            <input
              type="password"
              placeholder="비번"
              onChange={(e) => setpassword(e)}
            />
          </div>

          <div id="user">
            <label id="remember">
              <input type="checkbox" id="checkremober" />
              <label htmlFor="checkremober" />
              아이디 기억하기
            </label>
            <div id="forgot">비밀번호를 잊어버렸습니까?</div>
          </div>

          <button className="signbutton" onClick={sgin}>
            로그인
          </button>
          <div id="signup">
            계정이 없으신가요?
            <Link to="/signUp">회원가입</Link>
          </div>
        </div>
        <div id="delect">
          <Link to="/">
            <span className="material-icons">clear</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
