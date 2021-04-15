import React from "react";
import "./main.scss";
import Layout from "../layout/index";
//로그인 한뒤에 나오는 화면

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

interface MainProps {
  myvoca: Voca[] | undefined;
  mytips: Tip[] | undefined;

  detailvoca: (id: string) => void;
  detailtip: (id: string) => void;
}

const Main = ({ myvoca, mytips, detailtip, detailvoca }: MainProps) => {
  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export default Main;
