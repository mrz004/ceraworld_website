import React from "react";

function Card({ imgPath }) {
  return (
    <div className="card h-[60svh] aspect-[4/5] rounded-md overflow-hidden mx-8">
      <img className="inline-block w-full h-full" src={imgPath} alt={imgPath} />
    </div>
  );
}

export default Card;
