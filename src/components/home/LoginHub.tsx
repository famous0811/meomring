import React from "react";
import { Link } from "react-router-dom";

const LoginHub = () => {
  return (
    <div id="intro" className="loginhub">
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
  );
};

export default LoginHub;
