import React from "react";
import VideoBackground from "../VideoBackground/VideoBackground";
import bg_video from "/hero_video.mp4";
import { FaChevronDown } from "react-icons/fa6";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <VideoBackground src={bg_video}>
        <div className="hero h-svh grid">
          <h1 className="row-span-2 grid place-items-center text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
            Ceraworld
          </h1>
          <span
            className="self-end pb-4 w-fit mx-auto xl:text-xl cursor-pointer hover:underline underline-offset-4 relative"
            onClick={(_) => {
              window.scrollTo(0, 0.95 * window.innerHeight);
            }}
          >
            {/* Explore More */}
            <FaChevronDown className="text-xl 2xl:text-2xl" />
          </span>
        </div>
      </VideoBackground>
    </>
  );
}

export default Hero;
