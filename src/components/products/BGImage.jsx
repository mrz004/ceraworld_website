import React from "react";

function BGImage({ imgSrc, imgAlt, children }) {
  const overlayClassList = " overlay text-4xl sm:text-6xl xl:text-8xl";
  return (
    <div className="background_image place-items-center text-theme-white text-2xl isolate">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full max-h-[50svh] object-cover select-none brightness-[70%] -z-10"
      />
      {children &&
        (children.length ? (
          <div className={overlayClassList}>{...children}</div>
        ) : (
          <div className={overlayClassList}>{children}</div>
        ))}
    </div>
  );
}

export default BGImage;
