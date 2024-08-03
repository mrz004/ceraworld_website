import React from "react";
import "./Card.scss";

function Card({ imgPath, text }) {
  return (
    <div className="HorizontalScrollCard stacked-elements place-items-center h-[60svh] aspect-[4/5] rounded-md overflow-hidden mx-8">
      <img className="inline-block w-full h-full" src={imgPath} alt={imgPath} />
      <h4 className="text text-6xl text-theme-white opacity-0">{text}</h4>
    </div>
  );
}

export default Card;
