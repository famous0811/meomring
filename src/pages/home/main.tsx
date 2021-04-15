import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getMyVoca } from "../../res/api/voca";
import { getMyTip } from "../../res/api/tip";
import useStores from "../../store";

import MainPage from "../../components/home/main";

interface Tip {
  _id: string;
  text: string;
  img: string;
  user: string;
}
interface Voca {
  title: string;
  subtitle: string;
  amount: number;
  user: string;
}
const Main = () => {
  const history = useHistory();

  const [myVoca, setMyVoca] = useState<Voca[]>();
  const [myTips, setMyTips] = useState<Tip[]>();

  const { userActivitystore } = useStores();

  useEffect(() => {
    getMyVoca(userActivitystore.userid()).then((res) => {
      setMyVoca(res);
    });
    getMyTip(userActivitystore.userid()).then((res) => {
      setMyTips(res);
    });
  }, []);

  const goTipDetails = useCallback(
    (id: string) => {
      history.replace("/tipdetail/" + id);
    },
    [history]
  );
  const goVocaDetails = useCallback(
    (id: string) => {
      history.replace("/vocadetail/" + id);
    },
    [history]
  );

  return (
    <MainPage
      mytips={myTips}
      myvoca={myVoca}
      detailtip={goVocaDetails}
      detailvoca={goTipDetails}
    />
  );
};

export default Main;
