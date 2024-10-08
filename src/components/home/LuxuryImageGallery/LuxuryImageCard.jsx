import React from "react";
import { Link } from "react-router-dom";
import "./LuxuryImageCard.scss";
import ScrollAnimation from "react-animate-on-scroll";
// import { Button } from "flowbite-react";

function LuxuryImageCard({
  imgSrc,
  imgAlt,
  title,
  link,
  text,
  reverse,
  margin,
  animate,
}) {
  const alignmentStyle = reverse ? "sm:flex-row-reverse" : "";
  // const alignmentStyle = reverse
  //   ? `sm:flex-row-reverse ${
  //       margin === "sm" ? "sm:pr-20" : "sm:pr-20 md:pr-40"
  //     }`
  //   : `${margin === "sm" ? "sm:pl-20" : "sm:pl-20 md:pl-40"}`;
  // const alignmentStyle = reverse ? `sm:pr-10 sm:flex-row-reverse` : `sm:pl-10`;

  return (
    <div
      className={`luxury-image-card flex gap-4 sm:gap-8 md:gap-10 flex-col sm:flex-row bg-transparent rounded-sm sm:px-8 lg:px-16 xl:px-24 max-w-[75rem] mx-auto ${alignmentStyle}`}
    >
      {animate ? (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Link to={link}>
            <div className="img-container w-full sm:w-[50vmin] 2xl:w-[unset] 2xl:h-full aspect-square rounded-md overflow-hidden">
              <img className="w-full object-cover" src={imgSrc} alt={imgAlt} />
            </div>
          </Link>
        </ScrollAnimation>
      ) : (
        <div>
          <Link to={link}>
            <div className="img-container w-full sm:w-[50vmin] 2xl:w-[unset] 2xl:h-full aspect-square rounded-md overflow-hidden">
              <img className="w-full object-cover" src={imgSrc} alt={imgAlt} />
            </div>
          </Link>
        </div>
      )}
      <div
        className={`text p-4 flex flex-col justify-evenly ${
          reverse ? "sm:items-end" : "sm:items-start"
        }`}
      >
        <h3 className="text-theme-black tracking-wide text-2xl xl:text-4xl">
          {title}
        </h3>
        <div className="title text-theme-black text-xl xl:text-2xl text-justify">
          {text}
        </div>
        <Link
          className="link rounded-lg !bg-theme-blue text-theme-white border-2 border-theme-tail xl:text-xl my-2 w-fit"
          to={link}
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}

export default LuxuryImageCard;
