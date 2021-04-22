import React from "react";
import Intro from "./intro";
import Main from "./main";
import useStores from "../../store";
const Index = () => {
  const { userActivitystore, devicestore } = useStores();
  if (!userActivitystore.isLogin()) return Intro(devicestore.IsMobile());
  else {
    return Main();
  }
};

export default Index;
