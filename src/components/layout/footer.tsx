import React from "react";
import { Link } from "react-router-dom";
interface FooterProps {
  params: string;
}
function footer({ params }: FooterProps) {
  return (
    <footer>
      <div className="desktop">
        {/* <h1>기능</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
      <ul className="mobile">
        <li className="m_menu">
          <Link to="/">
            <span
              className={
                params === "/" ? "material-icons now" : "material-icons"
              }
            >
              home
            </span>
          </Link>
        </li>
        <li className="m_menu">
          <Link to="/find">
            <span
              className={
                params === "/find" ? "material-icons now" : "material-icons"
              }
            >
              search
            </span>
          </Link>
        </li>
        <li className="m_menu">
          <Link to="/voca">
            <span
              className={
                params === "/voca" ? "material-icons now" : "material-icons"
              }
            >
              import_contacts
            </span>
          </Link>
        </li>
        <li className="m_menu">
          <Link to="/mypage">
            <span
              className={
                params === "/mypage" ? "material-icons now" : "material-icons"
              }
            >
              person
            </span>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default footer;
