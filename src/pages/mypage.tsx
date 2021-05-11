import React, { useState, useEffect, useCallback, useRef } from "react";
import useStores from "./../store";
import UserHome from "../components/mypage";
const Mypage = () => {
  const [Useractivity, setUseractivity] = useState<{
    id: string | null;
    points: number | null;
    maketips: number | null;
  }>();
  const { userActivitystore } = useStores();

  useEffect(() => {
    setUseractivity(userActivitystore.userActivity());
  }, []);

  const ImgGetRef = useRef<HTMLInputElement>(null);
  const ImgPutRef = useRef<HTMLImageElement>(null);

  const Setingimg = useCallback(() => {
    if (!ImgGetRef.current || !ImgPutRef.current) return;
    const imgGet: HTMLInputElement = ImgGetRef.current;
    const imgPut: HTMLImageElement = ImgPutRef.current;
    //img tag
    if (imgGet.files![0]) {
      const reader = new FileReader();
      reader.onload = function (e?: any) {
        imgPut.src = e.target.result;
        setimg(e.target.result); //base64incoding
      };
      reader.readAsDataURL(imgGet.files![0]);
    }
  }, [ImgGetRef, ImgPutRef]);
  return <UserHome user={Useractivity}></UserHome>;
};

export default Mypage;
