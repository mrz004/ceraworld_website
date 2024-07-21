import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import "./AutoScrollCarousel.scss";

function AutoScrollCarousel({ images, link, linkText }) {
  return (
    <div className="auto-scroll-carousel py-6 px-8 place-items-center overflow-hidden isolate">
      <Carousel
        className="h-56 sm:h-64 xl:h-80 2xl:h-96"
        indicators={false}
        leftControl={<></>}
        rightControl={<></>}
      >
        {images.map((imgpath) => (
          <img
            key={imgpath}
            src={imgpath}
            alt={imgpath}
            className="select-none"
          />
        ))}
      </Carousel>
      {link && (
        <div className="overlay grid place-items-center  rounded-md">
          <Link
            to={link}
            className="text-theme-white text-2xl sm:text-4xl xl:text-6xl font-semibold z-10"
          >
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
}

export default AutoScrollCarousel;
