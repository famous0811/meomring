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
                  <img src={Modal} alt="" />
                </div>
                <div className="slide-col">
                  <img src={Modal} alt="" />
                </div>
                <div className="slide-col">
                  <img src={Modal} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <h1>Sign In</h1>
          <div className="InputWrap">
            <div className="text">Email Address</div>
            <input
              type="email"
              placeholder="아이디"
              onChange={(e) => setid(e)}
            />
          </div>

          <div className="InputWrap">
            <div className="text">Password</div>
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
              Remember me
            </label>
            <div id="forgot">Forgot Password?</div>
          </div>

          <button className="signbutton" onClick={sgin}>
            Sign in
          </button>
          <div id="signup">
            Don't have an account?
            <Link to="/signUp">Sign up</Link>
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
