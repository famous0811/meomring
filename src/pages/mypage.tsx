import React, { useState, useEffect } from "react";
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

  return <UserHome user={Useractivity}></UserHome>;
};

export default Mypage;
