import React, { useState, useRef, useCallback, useMemo } from "react";

import Mbasic from "../../components/home/Mbasic";
import Basic from "../../components/home/basic";
import LoginHub from "../../components/home/LoginHub";

import img1 from "../../res/images/undraw_Memory.svg";

const Intro = (IsMobile: boolean) => {
  const swiperef = useRef<HTMLDivElement>(null);
  const [skip, setskip] = useState(
    window.localStorage.getItem("skip") === "skip"
  );
  const [Layout, setLayout] = useState([
    {
      id: 0,
      title: "단어 외우기가 힘드시다구요?",
      src: img1,
      exparent: "단어암기를 위한 프로그램",
    },
    {
      id: 1,
      title: "단어 외우기가 힘드시다구요?",
      src: img1,
      exparent: "단어암기를 위한 프로그램",
    },
    {
      id: 2,
      title: "단어 외우기가 힘드시다구요?",
      src: img1,
      exparent: "단어암기를 위한 프로그램",
    },
    {
      id: 3,
      title: "단어 외우기가 힘드시다구요?",
      src: img1,
      exparent: "단어암기를 위한 프로그램",
    },
  ]);
  const SkipIntro = useCallback(() => {
    window.localStorage.setItem("skip", "skip");
  }, []);
  if (IsMobile) {
    if (!skip) return <Mbasic Layouts={Layout} SkipIntro={SkipIntro} />;
    else return <LoginHub />;
  } else return <Basic Layouts={Layout} />;
};

export default Intro;
