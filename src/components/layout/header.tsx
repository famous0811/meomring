import React from "react";
import { Link } from "react-router-dom";

interface HedaderProps {
  header: React.RefObject<HTMLElement>;
  params: string;
  login: boolean;
}
function Header({ params, header, login }: HedaderProps) {
  return (
    <header ref={header}>
      <div>
        <span>
          <h2>
            <Link to="/">TextMemorie</Link>
          </h2>
        </span>
        <div id="topbar">
          <ul id="menu">
            <li className={params === "/find" ? "now" : ""}>
              <Link to="/find">단어암기법찾기</Link>
            </li>
            <li className={params === "/voca" ? "now" : ""}>
              <Link to="/voca">단어장</Link>
            </li>
            <li className={params === "/mypage" ? "now" : ""}>
              <Link to="/mypage">마이 페이지</Link>
            </li>
          </ul>
          {login ? (
            <div className="login">
              <Link to="/logout">LOGOUT</Link>
            </div>
          ) : (
            <div className="login">
              <Link to="/login">SIGN IN</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
