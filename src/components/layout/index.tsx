import React, { useRef, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.scss";
import useStores from "../../store";
import { useHistory } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}
function Index({ children }: Props) {
  const { userActivitystore } = useStores();
  const history = useHistory();
  const [params, setparams] = useState(window.location.pathname);
  const header = useRef<HTMLElement>(null);
  const Top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Scrolling = () => {
      if (!header.current) {
        return;
      }
      if (!Top.current) {
        return;
      }
      const Header: HTMLElement = header.current;
      const topbutton: HTMLDivElement = Top.current;
      if (window.scrollY === 0) {
        Header.className = "top";
        topbutton.className = "";
      } else if (window.scrollY > 0) {
        Header.className = "scrolling";
        topbutton.className = "scrolling";
      }
    };

    Scrolling();
    window.addEventListener("scroll", Scrolling);
    setparams(window.location.pathname);

    if (window.location.pathname === "logout") {
      userActivitystore.logout();
      history.replace("/");
    }
  }, []);
  return (
    <>
      <Header
        params={params}
        header={header}
        login={userActivitystore.isLogin()}
      />
      <article>{children}</article>
      <div id="topmove" ref={Top}>
        <span
          className="material-icons"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          keyboard_arrow_up
        </span>
      </div>
      <Footer params={params} />
    </>
  );
}

export default Index;
