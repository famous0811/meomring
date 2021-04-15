import React from "react";
import Layout from "../layout/index";
import BaseLayout from "./baselayout";
import "./base.scss";
//로그인 하기전에 화면
interface BaseProps {
  Layouts: {
    id: number;
    title: string;
    exparent: string;
    src: string;
  }[];
}
const basic = ({ Layouts }: BaseProps) => {
  return (
    <Layout>
      <div id="basehome">
        {Layouts.map((data) => (
          <BaseLayout
            key={data.id}
            title={data.title}
            src={data.src}
            exparent={data.exparent}
          />
        ))}
      </div>
    </Layout>
  );
};

export default basic;
