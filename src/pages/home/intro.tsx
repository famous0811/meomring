import React, { useState, useRef, useCallback, useEffect } from "react";

import Mbasic from "../../components/home/Mbasic";
import Basic from "../../components/home/basic";
import LoginHub from "../../components/home/LoginHub";

import img1 from "../../res/images/undraw_Memory.svg";

const Intro = (IsMobile: boolean) => {
  const userTest = useRef<HTMLDivElement>(null);
  const [IntroMotivation, setIntroMotivation] = useState(
    "그럼 잘찾아 오셨습니다! 저희와 함께 노력 해봐요!"
  );
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
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const SkipIntro = useCallback(() => {
    window.localStorage.setItem("skip", "skip");
  }, []);
  const Start = useCallback(() => {
    var pos = document.getElementById("base_intro")?.offsetTop;
    if (!pos) return;

    window.scrollTo({
      top: pos - 72,
      behavior: "smooth",
    });
    Testmodelset();
  }, []);
  const Testmodelset = useCallback(() => {
    if (!userTest.current) return;
    const current = userTest.current;
    var top = document.getElementById("base_intro")?.offsetTop;
    var height = document.getElementById("base_intro")?.offsetHeight;
    if (!top || !height) return;
    var bottom = top + height;
    if (top > window.pageYOffset && window.pageYOffset < bottom) {
      current.className = "first_userTest zoom";
      return;
    }
    current.className = "first_userTest";
  }, [userTest]);

  useEffect(() => {
    window.addEventListener("scroll", Testmodelset);
  }, [Testmodelset]);
  const YesNo = useCallback((y: boolean) => {
    var pos2 = document.getElementById("base_intro_secend")?.offsetTop;
    if (!pos2) return;

    window.scrollTo({
      top: pos2 - 72,
      behavior: "smooth",
    });
    if (y)
      setIntroMotivation("그럼 잘찾아 오셨습니다! 저희와 함께 노력 해봐요!");
    else setIntroMotivation("그럼 여러분에 팁을 알려주세요!");
  }, []);

  if (IsMobile) {
    if (!skip) return <Mbasic Layouts={Layout} SkipIntro={SkipIntro} />;
    else return <LoginHub />;
  } else
    return (
      <Basic
        Layouts={Layout}
        settings={settings}
        Start={Start}
        YesNo={YesNo}
        userTestRef={userTest}
        IntroMotivation={IntroMotivation}
      />
    );
};

export default Intro;
