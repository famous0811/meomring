import React from "react";
import "./signup.scss";
import "./sign.scss";
import { Link } from "react-router-dom";
import Img from "../../res/images/exams.svg";
interface SiginupProps {
  onChange: (what: string, value: string) => void;
  Sgin: () => void;
}
const SignUp = ({ onChange, Sgin }: SiginupProps) => {
  return (
    <div id="signpage">
      <div id="signWrap">
        <div className="imgs intro">
          <img src={Img} alt="" width="100%" height="100%" />
          <span className="wiseSaying">
            <p>be all you can be</p>
          </span>
        </div>
        <div className="userform">
          <h1>Sign Up</h1>
          <div className="InputWrap signUp">
            <div className="text">id</div>
            <input
              type="text"
              placeholder="id"
              onChange={(e) => onChange("id", e.target.value)}
            />
          </div>
          <div className="InputWrap signUp">
            <div className="text">password</div>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => onChange("pwd", e.target.value)}
            />
          </div>
          <div className="InputWrap signUp">
            <div className="text">passwordagain</div>
            <input
              type="password"
              placeholder="passwordagain"
              onChange={(e) => onChange("rpwd", e.target.value)}
            />
          </div>
          <div className="InputWrap signUp">
            <div className="text">name</div>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>
          <div className="InputWrap signUp">
            <div className="text">age</div>
            <input
              type="number"
              placeholder="age"
              onChange={(e) => onChange("age", e.target.value)}
            />
          </div>
          <button type="submit" className="signbutton siginup" onClick={Sgin}>
            Sigin up
          </button>
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

export default SignUp;
