import React from "react";

function DescriptionCard({ imgSrc, imgAlt, text }) {
  return (
    <div className="product_description_card flex flex-col sm:flex-row px-4 sm:px-8 xl:px-16 py-12 justify-evenly gap-8">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-10/12 mx-auto sm:w-1/3 rounded-xl"
      />
      <p className="text-justify">{text}</p>
    </div>
  );
}

export default DescriptionCard;
