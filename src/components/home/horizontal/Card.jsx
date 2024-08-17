import React from "react";
import "./Card.scss";

// function Card({ imgPath, text }) {
//   return (
//     <div className="HorizontalScrollCard stacked-elements place-items-center w-full rounded-md overflow-hidden mx-8">
//       <img className="object-cover h-full" src={imgPath} alt={imgPath} />
//       <h4 className="text text-6xl text-theme-white opacity-0">{text}</h4>
//     </div>
//   );
// }

function Card({ imgPath, text }) {
  return (
    <div
      className="HorizontalScrollCard relative bg-cover aspect-[4/5] rounded-lg grid place-items-center h-[60svh]"
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <h4 className="text text-nowrap text-6xl z-10 absolute left-1/2 -translate-x-1/2 text-theme-white cursor-pointer">
        {text}
      </h4>
    </div>
  );
}

export default Card;
