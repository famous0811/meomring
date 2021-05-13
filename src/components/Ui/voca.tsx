import React from "react";
import "./ui.scss";

export interface VocaProps {
  title: string;
  count: number;
  user: string;
  subtitle: string;
  grapdata?: {
    title: string;
  };
}
function voca({ title, count, user, subtitle }: VocaProps) {
  return (
    <div className="voca itembox">
      <div className="vocaTitle">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className="vocaData">
        <div>{count}개</div>
        <span>작성자 : {user}</span>
      </div>
    </div>
  );
}

export default voca;
