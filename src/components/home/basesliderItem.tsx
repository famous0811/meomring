import React from "react";
import "./basesliderItem.scss";
interface BaseProps {
  title: string;
  exparent: string;
  src: string;
}

function Item({ title, exparent, src }: BaseProps) {
  return (
    <div className="base_layout">
      <div>
        <span className="base_layout_img">
          <img src={src} alt="imgerror" width="100%" height="100%" />
        </span>
        <div className="base_layout_text">
          <h2>{title}</h2>
          <p>{exparent}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
